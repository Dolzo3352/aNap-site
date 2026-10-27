/**
 * 콩 캐릭터 한 명을 그리는 순수 SVG <g>.
 * 명함 원본 SVG(pea1_body / pea1_eye_L …)와 같은 경로를 사용합니다.
 */
export type Eyes = "closed" | "half" | "open";
export type Pose = "sleep" | "awake";

const BODY: Record<Pose, string> = {
  // 콩깍지 안에 누운 포즈 (pod-sleep.svg)
  sleep:
    "M-19 5 C-17 -2 -12 -10 -4 -11 C2 -15 10 -12 15 -6 C19 -3 22 3 22 7 C15 12 -13 12 -19 5Z",
  // 깨어나 앉은 포즈 (pea-1-open.svg)
  awake:
    "M-19 8 C-22 -3 -17 -14 -8 -17 C0 -21 11 -17 17 -9 C24 0 23 10 16 14 C6 18 -13 16 -19 8Z",
};

// 포즈별 얼굴 높이
const FACE_Y: Record<Pose, number> = { sleep: -4, awake: -10 };

const ARMS: Record<string, string> = {
  // 콩깍지 안 — 각자 다른 팔
  sleep1: "M-13 5q-6 -4 -6 1q-2 5 3 6q4 0 2-5",
  sleep2: "M9 7 C11 8 10 17 14 17 C19 17 14 8 13 5",
  sleep3: "M17 4q8-13 11-6q2 5-8 9",
  // 깨어난 포즈 — 양팔
  awake1: "M-15 6q-8-7-8-2q-1 6 9 8 M17 4q7-15 11-10q3 7-9 15",
  awake2: "M-15 7q-5-3-6 1q0 5 8 6 M12 8c1 4 0 13 4 12c5-1 1-11 0-14",
  awake3: "M-18 6q-8 4-7 8q3 4 10 0 M17 3q9-10 12-5q2 6-10 13",
};

export function PeaFigure({
  pose = "sleep",
  eyes = "closed",
  variant = 1,
  className,
  arms: showArms = true,
}: {
  pose?: Pose;
  eyes?: Eyes;
  variant?: 1 | 2 | 3;
  className?: string;
  /** false면 팔을 그리지 않음 (바깥에서 따로 그릴 때) */
  arms?: boolean;
}) {
  const fy = FACE_Y[pose];
  const arms = ARMS[`${pose}${variant}`];
  return (
    <g
      className={className}
      stroke="var(--line)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={BODY[pose]} fill="var(--body)" />
      <g className="pea-eyes">
        {eyes === "open" && (
          <>
            <ellipse cx="-6" cy={fy} rx="1.1" ry="1.8" fill="var(--line)" stroke="none" />
            <ellipse cx="6" cy={fy} rx="1.1" ry="1.8" fill="var(--line)" stroke="none" />
          </>
        )}
        {eyes === "half" && (
          <>
            <path d={`M-7.2 ${fy}q1.2 1.4 2.4 0`} fill="none" strokeWidth="1.3" />
            <path d={`M4.8 ${fy}q1.2 1.4 2.4 0`} fill="none" strokeWidth="1.3" />
          </>
        )}
        {eyes === "closed" && (
          <>
            <path d={`M-8 ${fy}q2 2.5 4 0`} fill="none" strokeWidth=".9" />
            <path d={`M4 ${fy}q2 2.5 4 0`} fill="none" strokeWidth=".9" />
          </>
        )}
      </g>
      <path d={`M-2 ${fy + 5}q2 2 4 0`} strokeWidth=".85" fill="none" />
      <ellipse cx="-11" cy={fy + 3} rx="2.3" ry="1" fill="var(--blush)" stroke="none" opacity=".58" />
      <ellipse cx="11" cy={fy + 3} rx="2.3" ry="1" fill="var(--blush)" stroke="none" opacity=".58" />
      {showArms && <path d={arms} fill="var(--body)" strokeWidth="1.1" />}
    </g>
  );
}

/** 콩깍지 외곽 경로 (pod-sleep.svg) */
export const POD_PATH =
  "M31 102 C66 124 77 111 102 112 C156 130 392 124 482 115 C507 111 520 108 543 116 C658 132 810 121 873 114 C901 122 947 118 977 104 C963 117 936 127 902 125 C799 122 694 130 545 124 C521 121 511 119 488 120 C318 132 203 124 132 125 C117 133 96 129 79 122 C55 116 39 112 31 106Z";
export const POD_CURL = "M31 105c5-7-4-10-5-3c0 3 3 1 3-1";
export const POD_FRONT =
  "M74 119C170 130 387 126 484 120C509 116 523 119 545 123C674 130 826 121 879 120C924 126 959 114 977 104";
export const POD_SEATS = [108, 519, 897] as const;
