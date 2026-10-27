/** 손그림 아이콘 (characters/icons/*.svg 경로 그대로) */
const PATHS = {
  arrow: "M13 33Q31 31 51 32 M39 20Q48 25 52 32Q46 36 39 44",
  external: "M29 15H16Q12 15 12 20V48Q12 52 17 52H44Q49 52 49 47V36 M32 13Q43 12 53 13L52 34 M52 13L29 38",
  mail: "M12 18Q32 16 53 18L52 47Q32 49 12 47Z M13 19L32 34L52 19 M12 46L25 33 M51 46L39 33",
  instagram:
    "M23 11Q10 10 11 24V43Q10 54 23 53H43Q55 54 54 42V23Q55 10 42 11Z M43 31C43 17 22 18 22 32C22 46 43 46 43 31 M46 18L46 18.1",
  scroll: "M17 25Q24 34 32 41Q40 33 48 25 M32 10L32 28",
  close: "M16 16L48 48 M48 16L16 48",
};

export default function Icon({
  name,
  size = 18,
  className,
}: {
  name: keyof typeof PATHS;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}

/** 손그림 구분선 */
export function Divider({ className }: { className?: string }) {
  return (
    <svg className={`divider ${className ?? ""}`} viewBox="0 0 600 40" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M8 20C80 17 118 24 180 20S285 16 348 21S465 17 590 20"
        fill="none"
        stroke="var(--line)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** aNap 로고타입 (characters/anap-wordmark.svg) */
export function Wordmark({ height = 28 }: { height?: number }) {
  const a =
    "M39 31C17 22 9 45 12 61C16 80 34 80 44 68L45 76L54 75L52 30L43 30L43 35ZM40 42C49 57 38 73 28 68C17 63 18 45 27 41C32 39 36 39 40 42Z";
  return (
    <svg height={height} viewBox="6 6 236 98" fill="currentColor" fillRule="evenodd" aria-label="aNap">
      <path d={a} />
      <path d="M64 76L65 12L75 11L106 58L105 12L115 12L116 76L106 77L75 29L75 76Z" />
      <path d={a} transform="translate(117 0)" />
      <path d="M192 31L202 30L203 37C219 24 238 31 239 51C241 72 218 82 203 69L203 99L193 100ZM204 45C216 31 231 41 229 54C228 70 214 72 204 60Z" />
    </svg>
  );
}
