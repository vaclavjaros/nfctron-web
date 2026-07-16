import { NextRequest, NextResponse } from "next/server";
import { resolveLocale } from "@/i18n/config";

export function GET(request: NextRequest) {
  const locale = resolveLocale(request.nextUrl.searchParams.get("lang"));
  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set("nfctron-locale", locale, {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    path: "/",
  });
  return response;
}
