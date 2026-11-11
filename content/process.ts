import type { Locale } from "./types";

/**
 * /process 페이지 문구 — DayDream 시선 설계와 계측.
 * 숫자는 content/gaze-data.json 에서 계산해 넣습니다. 여기에는 문장만 둡니다.
 */
export type ProcessText = {
  navLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  back: string;
  score: { heading: string; body: string };
  legend: { child: string; bubble: string; hand: string; cue: string; band: string };
  axis: { front: string; right: string; left: string; back: string; sec: string };
  radial: { heading: string; body: string; recorded: (s: number) => string };
  stages: string[];
  objects: Record<string, string>;
  cueTip: (ok: number, n: number, react: number | null) => string;
  homeStrength: { title: string; body: string; link: string };
};

const ko: ProcessText = {
  navLabel: "Process",
  eyebrow: "Process · DayDream",
  title: "시선을 초 단위로 설계하고, 기록으로 확인합니다",
  lead: "DayDream의 관객은 의자에 앉아 고개만 돌립니다. 아이, 말풍선 등 연출이 언제 어느 방향에 나타날지 QA를 진행하며 정했습니다. 테스트 플레이마다 머리 방향을 기록해 그 설계와 비교합니다.",
  back: "홈으로",
  score: {
    heading: "시선 악보",
    body: "가로는 시간, 세로는 정면을 기준으로 한 방향입니다. 선은 대상이 화면에 있는 동안의 위치이고, 점은 시선을 끌려는 순간입니다. 옅은 띠(±30°)는 정면을 본 채로도 보이는 범위라서, 띠 밖의 점이 고개를 돌리게 해야 하는 순간입니다.",
  },
  legend: { child: "아이", bubble: "말풍선·영상창", hand: "손으로 만지는 대상", cue: "시선 큐", band: "정면 ±30°" },
  axis: { front: "정면", right: "오른쪽", left: "왼쪽", back: "등 뒤", sec: "초" },
  radial: {
    heading: "머리가 실제로 향한 방향",
    body: "관객을 위에서 내려다본 그림입니다. 위쪽이 정면이고, 칸이 진할수록 그 방향을 오래 봤습니다. 바깥 눈금은 그 스테이지에서 큐가 놓인 방향입니다.",
    recorded: (s) => `기록 ${s}초`,
  },
  stages: ["S0 튜토리얼", "S1 강가까지", "S1.5 신령의 공간", "S2 꿈", "S3 엔딩", "S4 엔딩 2"],
  objects: {
    o0: "아이 옮기기", o1: "꽃잎", o2: "빛나는 나무", o3: "연잎", o4: "연등 도착 자리", o5: "아이 되돌리기",
    o6: "아이", o7: "아이", o8: "아이 (2부)", o9: "아이", o10: "떠내려가는 아이", o11: "아이 (강가)",
    o12: "모닥불", o13: "연등", o14: "절벽 그림자 영상", o15: "아이",
    o16: "말풍선 1", o17: "말풍선 2", o18: "말풍선 3", o19: "꿈 말풍선",
  },
  cueTip: (ok, n, react) => `성공 ${ok}/${n}` + (react != null ? `, 반응 중앙값 ${react}초` : ""),
  homeStrength: {
    title: "연출을 기록으로 확인합니다",
    body: "DayDream은 시선 큐 32개를 초 단위로 설계하고, 테스트 플레이 41세션의 머리 방향 기록과 비교했습니다.",
    link: "시선 설계와 계측 보기",
  },
};

const en: ProcessText = {
  navLabel: "Process",
  eyebrow: "Process · DayDream",
  title: "We design where you look, second by second, and check it against recordings",
  lead: "In DayDream the audience sits in a chair and only turns their head. We ran QA to decide when and in which direction the child, the speech bubbles and other staging appear. Every test play records head direction, and we compare it with that design.",
  back: "Home",
  score: {
    heading: "The gaze score",
    body: "Time runs left to right, and the vertical axis is direction relative to straight ahead. A line shows where a target is while it is on screen, and a dot marks a moment meant to pull the gaze. The pale band (±30°) is what you can see while facing forward, so dots outside it are the moments that must make you turn your head.",
  },
  legend: { child: "Child", bubble: "Speech bubbles and video", hand: "Things you touch", cue: "Gaze cue", band: "Front ±30°" },
  axis: { front: "Front", right: "Right", left: "Left", back: "Behind", sec: "s" },
  radial: {
    heading: "Where heads actually pointed",
    body: "The viewer seen from above. Up is straight ahead, and a darker cell means more time spent facing that way. The outer ticks mark where that stage's cues sit.",
    recorded: (s) => `${s} s recorded`,
  },
  stages: ["S0 Tutorial", "S1 To the river", "S1.5 The spirit's place", "S2 Dream", "S3 Ending", "S4 Ending 2"],
  objects: {
    o0: "Moving the child", o1: "Petal", o2: "Glowing tree", o3: "Lotus leaf", o4: "Lantern landing spot", o5: "Returning the child",
    o6: "Child", o7: "Child", o8: "Child (part 2)", o9: "Child", o10: "Child swept away", o11: "Child (riverside)",
    o12: "Campfire", o13: "Lantern", o14: "Cliff shadow video", o15: "Child",
    o16: "Bubble 1", o17: "Bubble 2", o18: "Bubble 3", o19: "Dream bubble",
  },
  cueTip: (ok, n, react) => `${ok}/${n} hits` + (react != null ? `, median reaction ${react} s` : ""),
  homeStrength: {
    title: "We check our directing against recordings",
    body: "For DayDream we designed 32 gaze cues to the second and compared them with head-direction logs from 41 test sessions.",
    link: "See the gaze design and measurements",
  },
};

const ja: ProcessText = {
  navLabel: "Process",
  eyebrow: "Process · DayDream",
  title: "視線を秒単位で設計し、記録で確かめます",
  lead: "DayDreamの観客は椅子に座ったまま、首だけを動かします。子どもや吹き出しなどの演出がいつ、どの方向に現れるかを、QAを重ねながら決めました。テストプレイのたびに頭の向きを記録し、その設計と比べます。",
  back: "ホームへ",
  score: {
    heading: "視線の楽譜",
    body: "横は時間、縦は正面を基準にした方向です。線は対象が画面にある間の位置、点は視線を引こうとする瞬間です。薄い帯（±30°）は正面を向いたままでも見える範囲なので、帯の外にある点が、首を回してもらう必要のある瞬間です。",
  },
  legend: { child: "子ども", bubble: "吹き出し・映像", hand: "手で触れる対象", cue: "視線キュー", band: "正面±30°" },
  axis: { front: "正面", right: "右", left: "左", back: "背後", sec: "秒" },
  radial: {
    heading: "頭が実際に向いた方向",
    body: "観客を上から見た図です。上が正面で、色が濃いほどその方向を長く見ていました。外側の目盛りは、そのステージでキューが置かれた方向です。",
    recorded: (s) => `記録${s}秒`,
  },
  stages: ["S0 チュートリアル", "S1 川辺まで", "S1.5 神霊の空間", "S2 夢", "S3 エンディング", "S4 エンディング2"],
  objects: {
    o0: "子どもを運ぶ", o1: "花びら", o2: "光る木", o3: "蓮の葉", o4: "燃灯の到着場所", o5: "子どもを戻す",
    o6: "子ども", o7: "子ども", o8: "子ども（第2部）", o9: "子ども", o10: "流される子ども", o11: "子ども（川辺）",
    o12: "焚き火", o13: "燃灯", o14: "崖の影の映像", o15: "子ども",
    o16: "吹き出し1", o17: "吹き出し2", o18: "吹き出し3", o19: "夢の吹き出し",
  },
  cueTip: (ok, n, react) => `成功 ${ok}/${n}` + (react != null ? `、反応の中央値${react}秒` : ""),
  homeStrength: {
    title: "演出を記録で確かめます",
    body: "DayDreamでは視線キュー32個を秒単位で設計し、テストプレイ41セッションの頭の向きの記録と比べました。",
    link: "視線の設計と計測を見る",
  },
};

export const processText: Record<Locale, ProcessText> = { ko, en, ja };
