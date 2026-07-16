import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import { getLocale } from "@/i18n/server";
import { seo } from "@/i18n/config";
import { SITE_URL } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import CookieConsent from "@/features/privacy/CookieConsent";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const content = seo[locale];
  return {
    ...createPageMetadata({
      title: content.title,
      description: content.description,
      path: "/",
      locale,
      ogLabel: locale === "cs" ? "Akce a vstupenky" : "Events and tickets",
    }),
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
        { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
      other: [
        { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#25196A" },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={`${poppins.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <CookieConsent locale={locale} />
      </body>
    </html>
  );
}
