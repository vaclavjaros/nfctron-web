import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const sourceRoot = path.join(root, "src");
const liveUrlIndex = process.argv.indexOf("--url");
const liveUrl = liveUrlIndex >= 0 ? process.argv[liveUrlIndex + 1] : null;
const failures = [];
const internalRoutes = new Set([
  "/",
  "/cards",
  "/company-structure",
  "/for-artists",
  "/for-artists/elizabeth-kopecka",
  "/for-artists/like-it",
  "/for-artists/sebastian",
  "/for-organizers",
  "/for-organizers/ticketing",
  "/for-retailers",
  "/music",
  "/production",
  "/brand-assets",
]);

const publicAssetPattern = /\.(?:avif|gif|ico|jpe?g|png|svg|webp)$/i;

async function filesIn(directory) {
  const entries = await readdir(directory);
  const files = [];

  for (const entry of entries) {
    const absolute = path.join(directory, entry);
    const info = await stat(absolute);
    if (info.isDirectory()) files.push(...(await filesIn(absolute)));
    else if (/\.(ts|tsx)$/.test(entry)) files.push(absolute);
  }

  return files;
}

function report(condition, message) {
  if (!condition) failures.push(message);
}

const sourceFiles = await filesIn(sourceRoot);
const source = new Map(
  await Promise.all(
    sourceFiles.map(async (file) => [file, await readFile(file, "utf8")]),
  ),
);

for (const [file, contents] of source) {
  const relative = path.relative(root, file);
  report(!/NFCtronu\b/.test(contents), `${relative}: use NFCtron, not NFCtronu`);
  report(
    !/NFCtron Hubu\b/.test(contents),
    `${relative}: use NFCtron Hub, not NFCtron Hubu`,
  );

  for (const match of contents.matchAll(/href="(https?:\/\/[^"\s]+)"/g)) {
    try {
      new URL(match[1]);
    } catch {
      failures.push(`${relative}: invalid external href ${match[1]}`);
    }
  }

  for (const match of contents.matchAll(/href="(\/[^"\s]*)"/g)) {
    const route = match[1].split(/[?#]/, 1)[0] || "/";
    if (publicAssetPattern.test(route)) continue;
    const publicRoute = route.replace(/^\/(?:cs|en)(?=\/|$)/, "") || "/";
    report(
      internalRoutes.has(publicRoute),
      `${relative}: internal CTA points to an unknown route ${match[1]}`,
    );
  }

  report(
    !/href=(?:"#"|'#'|\{["']#["']\})/.test(contents),
    `${relative}: CTA uses a placeholder href`,
  );
}

const heroPages = [
  "src/components/ArtistHome.tsx",
  "src/features/organizers/OrganizerHome.tsx",
  "src/features/production/ProductionHome.tsx",
  "src/features/music/MusicHome.tsx",
  "src/features/cards/CardsHome.tsx",
  "src/features/company/CompanyStructureHome.tsx",
  "src/features/brand-assets/BrandAssetsHome.tsx",
];

for (const relative of heroPages) {
  const contents = source.get(path.join(root, relative)) ?? "";
  report(
    contents.includes("<AudienceHeroSection"),
    `${relative}: subpage must use AudienceHeroSection`,
  );
}

const header = source.get(path.join(sourceRoot, "components/SiteHeader.tsx")) ?? "";
report(
  /id: "cards", label: "NFCtron Card"/.test(header),
  "src/components/SiteHeader.tsx: card navigation must use NFCtron Card",
);

const routes = [
  "/",
  "/for-organizers",
  "/for-organizers/ticketing",
  "/for-retailers",
  "/for-artists",
  "/for-artists/elizabeth-kopecka",
  "/for-artists/sebastian",
  "/for-artists/like-it",
  "/music",
  "/cards",
  "/company-structure",
  "/production",
  "/brand-assets",
];

if (liveUrl) {
  const czechLeakage = [
    /\b(?:července|června|srpna|května|září|února)\b/i,
    /\b(?:Zobrazit|Prohlédnout|Vybrat|Přihlásit|Návštěvníci|Pořadatelé|Prodejci|Interpreti)\b/i,
    /\b(?:koncertů|akcí|vstupenky|prodejci)\b/i,
  ];

  for (const route of routes) {
    const localizedRoute = route === "/" ? "/en" : `/en${route}`;
    const response = await fetch(new URL(localizedRoute, liveUrl));
    report(response.ok, `${route}: returned HTTP ${response.status}`);
    const html = await response.text();
    const visibleText = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ");

    for (const pattern of czechLeakage) {
      report(!pattern.test(visibleText), `${route}: Czech text found in English render (${pattern})`);
    }
  }
}

if (failures.length) {
  console.error("Site audit failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Site audit passed${liveUrl ? ` for ${routes.length} live routes` : ""}.`);
