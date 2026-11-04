import { NextRequest, NextResponse } from "next/server";

const locales = ["ko", "en", "ja"] as const;
const defaultLocale = "ko";

/** 브라우저 언어로 첫 진입 언어를 고름: ja → /ja, en → /en, 그 외 → /ko */
function pickLocale(req: NextRequest): string {
  const header = req.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase();
    if (tag.startsWith("ja")) return "ja";
    if (tag.startsWith("ko")) return "ko";
    if (tag.startsWith("en")) return "en";
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/${pickLocale(req)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // 정적 파일·이미지·API 는 제외
  matcher: ["/((?!_next|images|icons|favicon|apple-touch-icon|og-image|.*\\..*).*)"],
};
