import { ImageResponse } from "next/og";

export const runtime = "edge";

function clean(value: string | null, fallback: string, maxLength: number) {
  return (value?.trim() || fallback).slice(0, maxLength);
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = clean(url.searchParams.get("title"), "NFCtron", 90);
  const description = clean(
    url.searchParams.get("description"),
    "Akce, vstupenky a technologie NFCtron.",
    180,
  );
  const label = clean(url.searchParams.get("label"), "NFCtron", 40);
  const requestedImage = url.searchParams.get("image");
  const image = requestedImage?.startsWith("/artists/")
    ? new URL(requestedImage, request.url).toString()
    : null;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        color: "white",
        background: image
          ? "#0b0d2f"
          : "linear-gradient(135deg,#0e1c69 0%,#28156f 58%,#5136c7 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {image ? (
        <img
          src={image}
          alt=""
          width="1200"
          height="630"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.38,
          }}
        />
      ) : null}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          background: image
            ? "linear-gradient(90deg,rgba(5,7,35,.72) 0%,rgba(5,7,35,.38) 64%,rgba(5,7,35,.1) 100%)"
            : "transparent",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: 68,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <span>NFCtron</span>
          <span style={{ color: "rgba(255,255,255,.5)", fontSize: 18 }}>
            {label}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: image ? 850 : 980,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: title.length > 55 ? 58 : 70,
              lineHeight: 1.03,
              fontWeight: 700,
              letterSpacing: -2.5,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 920,
              marginTop: 24,
              fontSize: 25,
              lineHeight: 1.35,
              color: "rgba(255,255,255,.72)",
            }}
          >
            {description}
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control":
          "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}
