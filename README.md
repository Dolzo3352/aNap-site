# aNap 팀 사이트

Next.js 15 (App Router) · 의존성은 React/Next뿐입니다. 콩깍지·캐릭터는 전부 인라인 SVG라 이미지 파일 없이 코드로 움직입니다.

## 로컬 실행
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 배포 전 확인
```

## 언어 (한 / EN / 日)
주소가 언어별로 나뉩니다: `/ko` `/en` `/ja`. 루트 `/`로 들어오면 브라우저 언어에 따라 자동 이동합니다(일본어→/ja, 영어→/en, 그 외→/ko).
우측 상단 `한 / EN / 日` 버튼으로 전환할 수 있습니다.

## 글·링크 수정
- **글** → `content/ko.ts` · `content/en.ts` · `content/ja.ts` (세 파일이 같은 구조, `[TODO]`가 임시 문구)
- **링크·이미지 경로·이메일·인스타** → `content/shared.ts` (한 번만 고치면 세 언어에 모두 적용)
- 작품 순서 → `content/shared.ts`의 `worksOrder`
- 팀원 순서는 `shared.ts`의 `membersMeta`와 `ko/en/ja`의 `members`가 같은 순서여야 합니다

## 이미지 교체
`public/images/` 아래 같은 파일명으로 덮어쓰면 됩니다.
- `works/daydream/`, `works/maeum/` — hero / still-02 / still-03 / poster / experience (webp)
- `works/snowglobe/` — 아직 없음. 이미지가 생기면 `content/site.ts`의 `comingSoon: true`를 지우고 `hero`, `stills` 경로를 넣어 주세요.
- `exhibition/` — 전시 사진 3장 + `space-plan.svg`
- `og-image.png`, `favicon*.png` — 루트

## Vercel 배포
1. 이 폴더를 GitHub 저장소로 푸시
2. vercel.com → Add New Project → 저장소 선택 → 설정 변경 없이 Deploy (Next.js 자동 인식)
3. 배포 주소가 나오면 `content/site.ts`의 `site.url`을 그 주소로 바꾸고 다시 푸시 (OG 이미지 링크용)

## 애니메이션 동작
- 히어로 콩깍지: 세 명이 자다가 가끔 한 명이 실눈을 뜸 → 마우스를 올리면 그 콩이 깨어나 고개를 듦 → 떼면 다시 잠듦
- People 캐릭터: 가끔 깜빡임, 카드에 마우스 올리면 폴짝
- Works 카드: 호버 시 대표 이미지 → 스틸로 크로스페이드
- 모바일: 콩깍지 가운데 콩을 클로즈업
- `prefers-reduced-motion` 설정 시 자동 움직임 모두 정지

## 폴더 구조
```
app/[locale]/   layout, page (ko/en/ja 공통)
app/globals.css
middleware.ts   / → 언어별 주소로 리다이렉트
components/     Pod(히어로 콩깍지) · Pea(캐릭터 SVG) · PeaAvatar · AboutScene · Brainstorm · WorkCard · Nav · Reveal · Icon
content/        ko.ts en.ts ja.ts ← 글 / shared.ts ← 링크·경로 / index.ts ← 합치기
public/images/  사진
```
