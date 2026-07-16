import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";
import type { Locale } from "@/i18n/config";

interface PageMetadataOptions {
  title: string;
  socialTitle?: string;
  description: string;
  path: string;
  locale: Locale;
  image?: string;
  imageAlt?: string;
  ogLabel?: string;
}

function buildOgImageUrl({
  title,
  socialTitle,
  description,
  image,
  ogLabel,
}: Pick<
  PageMetadataOptions,
  "title" | "socialTitle" | "description" | "image" | "ogLabel"
>) {
  const params = new URLSearchParams({
    title: socialTitle ?? title,
    description,
  });
  if (image) params.set("image", image);
  if (ogLabel) params.set("label", ogLabel);
  return `/og?${params.toString()}`;
}

export function createPageMetadata({
  title,
  socialTitle,
  description,
  path,
  locale,
  image,
  imageAlt = title,
  ogLabel = "NFCtron",
}: PageMetadataOptions): Metadata {
  const canonicalPath = path === "/" ? "" : path;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const shareTitle = socialTitle ?? title;
  const ogImage = buildOgImageUrl({
    title,
    socialTitle,
    description,
    image,
    ogLabel,
  });

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: canonicalUrl },
    robots: { index: true, follow: true },
    openGraph: {
      title: shareTitle,
      description,
      url: canonicalUrl,
      siteName: "NFCtron",
      type: "website",
      locale: locale === "cs" ? "cs_CZ" : "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [ogImage],
    },
  };
}
