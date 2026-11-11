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
  source: string;
  back: string;
  tiles: { cues: string; range: string; sessions: string; follow: string };
  sessionsUnit: string;
  cuesUnit: string;
  steps: { label: string; head: string; body: string }[];
  score: { heading: string; body: string; note: (len: number, total: number, off: number) => string };
  legend: { child: string; bubble: string; hand: string; cue: string; band: string };
  axis: { front: string; right: string; left: string; back: string; sec: string };
  radial: { heading: string; body: string; recorded: (s: number) => string; note: string };
  findings: {
    heading: string;
    front: (ok: number, n: number) => string;
    side: (ok: number, n: number) => string;
    body: string;
    tableHead: [string, string, string, string];
    after: string;
  };
  caveat: string;
  first: string;
  stages: string[];
  objects: Record<string, string>;
  cueTip: (ok: number, n: number, react: number | null) => string;
  homeStrength: { title: string; body: string; link: string };
};

const ko: ProcessText = {
  navLabel: "Process",
  eyebrow: "Process · DayDream",
  title: "시선을 초 단위로 설계하고, 기록으로 확인합니다",
  lead: "DayDream의 관객은 의자에 앉아 고개만 돌립니다. 아이, 말풍선, 영상창이 언제 어느 방향에 나타날지를 타임라인에 초 단위로 정했습니다. 테스트 플레이마다 머리 방향을 기록해 그 설계와 비교합니다.",
  source: "2026년 11월 10~11일 내부 테스트 플레이 기준",
  back: "홈으로",
  tiles: {
    cues: "초 단위로 설계한 시선 큐 (스테이지 5개)",
    range: "대상이 놓이는 방향 범위 (정면 0°)",
    sessions: "내부 테스트 플레이. 헤드셋 착용 {hmd}세션, 합계 {min}분",
    follow: "움직이는 아이를 시선이 따라간 횟수 (성공/시도)",
  },
  sessionsUnit: "세션",
  cuesUnit: "개",
  steps: [
    {
      label: "01 설계",
      head: "7,970행, 큐 32개",
      body: "타임라인을 1초 간격으로 돌려 대상마다 방향, 거리, 보이는지 여부를 뽑고 그 위에 시선 큐를 얹습니다.",
    },
    {
      label: "02 기록",
      head: "머리 초당 5회, 손 초당 10회",
      body: "플레이 중 머리 방향과 손 관절 26개를 남기고, 인터랙션 이벤트를 같은 시간축에 적습니다.",
    },
    {
      label: "03 분석",
      head: "스크립트 한 번",
      body: "큐별 성공 횟수와 반응 시간, 스테이지별 방향 분포가 표와 그래프로 나옵니다.",
    },
  ],
  score: {
    heading: "시선 악보",
    body: "가로는 시간, 세로는 정면을 기준으로 한 방향입니다. 선은 대상이 화면에 있는 동안의 위치이고, 점은 시선을 끌려는 순간입니다. 옅은 띠(±30°)는 정면을 본 채로도 보이는 범위라서, 띠 밖의 점이 고개를 돌리게 해야 하는 순간입니다.",
    note: (len, total, off) => `길이 ${len}초. 큐 ${total}개 중 ${off}개가 정면 띠 밖에 있습니다.`,
  },
  legend: { child: "아이", bubble: "말풍선·영상창", hand: "손으로 만지는 대상", cue: "시선 큐", band: "정면 ±30°" },
  axis: { front: "정면", right: "오른쪽", left: "왼쪽", back: "등 뒤", sec: "초" },
  radial: {
    heading: "머리가 실제로 향한 방향",
    body: "관객을 위에서 내려다본 그림입니다. 위쪽이 정면이고, 칸이 진할수록 그 방향을 오래 봤습니다. 바깥 눈금은 그 스테이지에서 큐가 놓인 방향입니다.",
    recorded: (s) => `기록 ${s}초`,
    note: "S1은 끝까지 간 세션이 1개라 한 사람의 궤적입니다. S0, S1.5, S3에는 헤드셋 없이 돌린 세션(정면 고정)이 섞여 있습니다.",
  },
  findings: {
    heading: "기록이 짚어준 곳",
    front: (ok, n) => `정면 ±30° 안의 큐는 ${n}번 중 ${ok}번 시선이 닿았습니다.`,
    side: (ok, n) => `그 밖의 큐는 ${n}번 중 ${ok}번이었습니다.`,
    body: "성공률이 절반 이하인 큐 6개는 모두 정면 30° 밖에 있었습니다. 대부분 손 인터랙션을 기다리는 자리입니다.",
    tableHead: ["스테이지", "큐", "방향", "성공/시도"],
    after: "이 목록이 다음 수정의 출발점입니다. 전시 시연 뒤에는 관람객 데이터로 다시 잽니다.",
  },
  first: "첫 시선",
  caveat: "측정값은 눈이 아니라 머리 방향입니다. 큐가 나온 뒤 8~10초 안에 머리가 대상 ±30° 안으로 들어오면 성공으로 셉니다.",
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
  lead: "In DayDream the audience sits in a chair and only turns their head. We decided on the timeline, to the second, when and in which direction the child, the speech bubbles and the video panels appear. Every test play records head direction, and we compare it with that design.",
  source: "Based on internal test plays, 10 to 11 November 2026",
  back: "Home",
  tiles: {
    cues: "gaze cues designed to the second (5 stages)",
    range: "range of directions where targets appear (front is 0°)",
    sessions: "internal test plays. {hmd} with a headset on, {min} minutes in total",
    follow: "times the gaze followed the moving child (hits / tries)",
  },
  sessionsUnit: " sessions",
  cuesUnit: "",
  steps: [
    {
      label: "01 Design",
      head: "7,970 rows, 32 cues",
      body: "We step through the timeline one second at a time, record each target's direction, distance and visibility, and place the gaze cues on top.",
    },
    {
      label: "02 Record",
      head: "Head 5 times a second, hands 10",
      body: "During play we log head direction and 26 hand joints, and write interaction events on the same time axis.",
    },
    {
      label: "03 Analyze",
      head: "One script",
      body: "It produces hit counts and reaction times per cue and the direction distribution per stage, as tables and charts.",
    },
  ],
  score: {
    heading: "The gaze score",
    body: "Time runs left to right, and the vertical axis is direction relative to straight ahead. A line shows where a target is while it is on screen, and a dot marks a moment meant to pull the gaze. The pale band (±30°) is what you can see while facing forward, so dots outside it are the moments that must make you turn your head.",
    note: (len, total, off) => `${len} seconds long. ${off} of ${total} cues sit outside the front band.`,
  },
  legend: { child: "Child", bubble: "Speech bubbles and video", hand: "Things you touch", cue: "Gaze cue", band: "Front ±30°" },
  axis: { front: "Front", right: "Right", left: "Left", back: "Behind", sec: "s" },
  radial: {
    heading: "Where heads actually pointed",
    body: "The viewer seen from above. Up is straight ahead, and a darker cell means more time spent facing that way. The outer ticks mark where that stage's cues sit.",
    recorded: (s) => `${s} s recorded`,
    note: "Only one session finished S1, so that chart is one person's path. S0, S1.5 and S3 include runs without a headset, which stay fixed on the front.",
  },
  findings: {
    heading: "What the recordings pointed at",
    front: (ok, n) => `Cues within ±30° of the front were reached ${ok} times out of ${n}.`,
    side: (ok, n) => `Cues outside it were reached ${ok} times out of ${n}.`,
    body: "All six cues with a hit rate of half or less sat more than 30° off the front. Most are spots where the piece waits for a hand interaction.",
    tableHead: ["Stage", "Cue", "Direction", "Hits / tries"],
    after: "This list is where the next round of changes starts. After the public showings we will measure again with audience data.",
  },
  first: "First look",
  caveat: "We measure head direction, not eye direction. A cue counts as a hit when the head comes within ±30° of the target 8 to 10 seconds after the cue.",
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
  lead: "DayDreamの観客は椅子に座ったまま、首だけを動かします。子ども、吹き出し、映像の窓がいつ、どの方向に現れるかを、タイムライン上で秒単位に決めました。テストプレイのたびに頭の向きを記録し、その設計と比べます。",
  source: "2026年11月10〜11日の内部テストプレイに基づく",
  back: "ホームへ",
  tiles: {
    cues: "秒単位で設計した視線キュー（5ステージ）",
    range: "対象が置かれる方向の範囲（正面が0°）",
    sessions: "内部テストプレイ。ヘッドセット装着{hmd}セッション、合計{min}分",
    follow: "動く子どもを視線が追った回数（成功／試行）",
  },
  sessionsUnit: "セッション",
  cuesUnit: "個",
  steps: [
    {
      label: "01 設計",
      head: "7,970行、キュー32個",
      body: "タイムラインを1秒ごとに進め、対象ごとの方向・距離・見えているかどうかを書き出し、その上に視線キューを置きます。",
    },
    {
      label: "02 記録",
      head: "頭は毎秒5回、手は毎秒10回",
      body: "プレイ中の頭の向きと手の関節26か所を残し、インタラクションのイベントを同じ時間軸に書き込みます。",
    },
    {
      label: "03 分析",
      head: "スクリプト1回",
      body: "キューごとの成功回数と反応時間、ステージごとの方向の分布が表とグラフで出ます。",
    },
  ],
  score: {
    heading: "視線の楽譜",
    body: "横は時間、縦は正面を基準にした方向です。線は対象が画面にある間の位置、点は視線を引こうとする瞬間です。薄い帯（±30°）は正面を向いたままでも見える範囲なので、帯の外にある点が、首を回してもらう必要のある瞬間です。",
    note: (len, total, off) => `長さ${len}秒。キュー${total}個のうち${off}個が正面の帯の外にあります。`,
  },
  legend: { child: "子ども", bubble: "吹き出し・映像", hand: "手で触れる対象", cue: "視線キュー", band: "正面±30°" },
  axis: { front: "正面", right: "右", left: "左", back: "背後", sec: "秒" },
  radial: {
    heading: "頭が実際に向いた方向",
    body: "観客を上から見た図です。上が正面で、色が濃いほどその方向を長く見ていました。外側の目盛りは、そのステージでキューが置かれた方向です。",
    recorded: (s) => `記録${s}秒`,
    note: "S1は最後まで進んだセッションが1つだけなので、1人分の軌跡です。S0、S1.5、S3にはヘッドセットなしで回したセッション（正面固定）が混ざっています。",
  },
  findings: {
    heading: "記録が示した場所",
    front: (ok, n) => `正面±30°以内のキューは、${n}回のうち${ok}回、視線が届きました。`,
    side: (ok, n) => `それ以外のキューは${n}回のうち${ok}回でした。`,
    body: "成功率が半分以下だったキュー6個は、すべて正面から30°より外にありました。多くは手のインタラクションを待つ場所です。",
    tableHead: ["ステージ", "キュー", "方向", "成功／試行"],
    after: "この一覧が次の修正の出発点です。展示のあとは来場者のデータで測り直します。",
  },
  first: "最初の視線",
  caveat: "測っているのは目ではなく頭の向きです。キューが出てから8〜10秒以内に頭が対象の±30°以内に入れば成功と数えます。",
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
