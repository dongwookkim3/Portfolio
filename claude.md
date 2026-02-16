# Portfolio Project — Agent Context Document

> **마지막 업데이트:** 2026-02-16  
> 이 문서는 AI 에이전트가 프로젝트를 빠르게 이해하기 위한 참조 문서입니다.  
> 로직이 변경될 때마다 업데이트되어야 합니다.

---

## 1. 프로젝트 개요

- **프로젝트명:** Dongwook Kim Portfolio
- **패키지명:** `@dongwookkim/portfolio`
- **소유자:** 김동욱 — 로봇 개발자
- **목적:** 전문 로봇/임베디드 개발자 포트폴리오 웹사이트
- **프레임워크:** [Astro](https://astro.build/) v5.7.10+ + **@astrojs/mdx**
- **언어:** TypeScript, Astro, CSS, **MDX**
- **빌드 도구:** Astro 내장 빌드 (Vite 기반)
- **패키지 매니저:** npm
- **배포:** Docker (node:18-alpine 기반, 포트 3000)

---

## 2. 핵심 명령어

| 명령어            | 설명              |
| ----------------- | ----------------- |
| `npm run dev`     | 개발 서버 실행    |
| `npm run build`   | 프로덕션 빌드     |
| `npm run preview` | 빌드 결과 미리보기 |

---

## 3. 디렉토리 구조

```
Portfolio/
├── astro.config.mjs          # Astro 설정 (MDX 통합 포함)
├── tsconfig.json              # TypeScript 설정 (strict, ESNext)
├── Dockerfile                 # Docker 배포 설정
├── package.json
├── public/assets/             # 정적 자산 (backgrounds, certificates, project)
├── src/
│   ├── content.config.ts      # Content Collections 스키마 (project 컬렉션)
│   ├── components/
│   │   ├── CertSection.astro  # 자격증 섹션 컴포넌트 (about에서 사용)
│   │   ├── Nav.astro          # 상단 네비게이션 (social.ts + site.ts 연동)
│   │   ├── Footer.astro       # 하단 푸터 (social.ts + site.ts 연동)
│   │   ├── ContactCTA.astro   # 하단 CTA (site.ts 이메일 연동)
│   │   ├── MainHead.astro     # <head> 메타 (site.ts 기본값 연동)
│   │   ├── Hero.astro, Grid.astro, Pill.astro, Icon.astro ...
│   │   └── ...
│   ├── content/project/       # MDX 프로젝트 콘텐츠
│   │   ├── BUMITORI.mdx
│   │   ├── Cloud.mdx
│   │   └── PECO.mdx
│   ├── data/                  # 분리된 데이터 파일들
│   │   ├── types.ts           # 공유 TypeScript 인터페이스
│   │   ├── site.ts            # 사이트 설정 중앙 관리 (이름, 이메일, GitHub 등)
│   │   ├── projects.ts        # 프로젝트 조회 유틸리티 (getPublishedProjects)
│   │   ├── social.ts          # 소셜 링크 + getSocialLinksFor() 헬퍼
│   │   ├── skills.ts          # 기술 스택 (5개 카테고리)
│   │   ├── career.ts          # 경력 사항 (TODO: 실제 데이터 필요)
│   │   ├── education.ts       # 학력
│   │   ├── certificates.ts    # 자격증 (국가기술/전문/민간)
│   │   ├── achievements.ts    # 수상 경력
│   │   └── algorithm.ts       # 알고리즘 대회/OJ/출제 데이터
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro        # 홈 (Hero + Tech Stack + Latest Projects + Connect)
│   │   ├── about.astro        # About (Career + Education + Certificate + Achievements)
│   │   ├── project.astro      # 프로젝트 목록 (카테고리 필터)
│   │   ├── project/[...slug].astro  # 프로젝트 상세 (role, github 표시)
│   │   ├── algorithm.astro    # 알고리즘 활동
│   │   └── 404.astro
│   └── styles/
│       ├── global.css         # CSS 변수, 유틸리티, MDX 콘텐츠 스타일
│       └── about.css          # About/Algorithm 공유 스타일
```

---

## 4. 라우팅

| 파일                            | URL               | 설명                               |
| ------------------------------- | ------------------ | ---------------------------------- |
| `pages/index.astro`             | `/`                | 홈 (Hero + Tech Stack + Projects + Connect) |
| `pages/about.astro`             | `/about/`          | About (Career, Education, Cert, Achievements) |
| `pages/project.astro`           | `/project/`        | 프로젝트 목록 + 카테고리 필터      |
| `pages/project/[...slug].astro` | `/project/{slug}`  | 프로젝트 상세 (MDX 렌더링)         |
| `pages/algorithm.astro`         | `/algorithm/`      | 알고리즘 활동                      |
| `pages/404.astro`               | 404                | 에러 페이지                        |

**Nav 메뉴:** Home · About · Project · Algorithm

---

## 5. Content Collections

### 5.1 스키마 (`content.config.ts`)

```typescript
schema: z.object({
    title: z.string(),
    projectName: z.string(),
    status: z.enum(["완료", "진행중"]).default("완료"),
    published: z.boolean().default(true),   // 공개/비공개 (false면 빌드에서 제외)
    category: z.enum(["robot", "embedded", "software", "etc"]).default("etc"),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    img: z.string(),
    img_alt: z.string().optional(),
    role: z.string().optional(),       // 프로젝트 내 역할
    github: z.string().url().optional(), // GitHub 링크
})
```

- 파일 패턴: `**/*.{md,mdx}`
- `published: false` 프로젝트는 목록 및 상세 페이지 모두 제외
- `getPublishedProjects()` 유틸리티로 조회 로직 중앙화
- `category` 필드로 project.astro에서 JS 기반 카테고리 필터링

### 5.2 현재 프로젝트

| 파일           | 카테고리  | 프로젝트명 | 설명                         |
| -------------- | --------- | ---------- | ---------------------------- |
| `BUMITORI.mdx` | embedded  | BUMITORI   | 기숙사 입사 관리 RFID 시스템 |
| `Cloud.mdx`    | embedded  | 바로우산   | 교내 우산 대여 서비스        |
| `PECO.mdx`     | robot     | R2BOT      | 자율주행 짐 운반/안내 로봇   |

---

## 6. 데이터 파일 (`src/data/`)

데이터는 도메인별 TypeScript 파일로 분리 관리:

| 파일               | 내용                                    | 주요 사용처         |
| ------------------ | --------------------------------------- | ------------------- |
| `types.ts`         | 공유 인터페이스 정의                    | 모든 data 파일      |
| `site.ts`          | 사이트 설정 중앙 관리 + `pageTitle()` 헬퍼 | 전역 (MainHead, Nav, Footer 등) |
| `projects.ts`      | `getPublishedProjects()` 유틸리티       | index, project, [...slug] |
| `social.ts`        | 소셜 링크 + `getSocialLinksFor()` 헬퍼  | Nav, Footer, index  |
| `skills.ts`        | 기술 스택 (5개 카테고리)                | index               |
| `career.ts`        | 경력 사항                               | about               |
| `education.ts`     | 학력 (3개 항목)                         | about               |
| `certificates.ts`  | 자격증 (국가기술/전문/민간)             | about               |
| `achievements.ts`  | 수상 경력 (7개 항목)                    | about               |
| `algorithm.ts`     | 대회 참가/개최/OJ 프로필/문제 출제      | algorithm            |

### `social.ts` — showIn 패턴

```typescript
getSocialLinksFor("nav")    // Nav에 표시할 소셜 링크
getSocialLinksFor("footer") // Footer에 표시할 소셜 링크
getSocialLinksFor("home")   // 홈 페이지 Connect 섹션
```

각 링크에 `showIn: ("nav" | "footer" | "home")[]` 필드로 표시 위치 제어.

---

## 7. 컴포넌트 시스템

### 7.1 레이아웃/구조
- `BaseLayout.astro` — HTML 구조, 다크/라이트 배경, Nav + Footer
- `MainHead.astro` — `<head>` 메타, 폰트, 다크모드 초기화 스크립트

### 7.2 UI 컴포넌트
- `Nav.astro` — 네비게이션 (social.ts + site.ts 연동, aria-label 포함)
- `Footer.astro` — 푸터 (social.ts + site.ts 연동, rel="noopener" 포함)
- `Hero.astro` — 히어로 섹션
- `Grid.astro` — 그리드 레이아웃 (`offset` / `small`)
- `Pill.astro` — 태그 pill
- `Icon.astro` + `IconPaths.ts` — SVG 아이콘
- `CallToAction.astro` — CTA 버튼
- `ContactCTA.astro` — 하단 CTA (site.ts 이메일 연동)
- `CertSection.astro` — 자격증 섹션 (about.astro에서 사용)
- `PortfolioPreview.astro` — 프로젝트 카드
- `ThemeToggle.astro` — 테마 토글 (Web Component)

### 7.3 MDX 콘텐츠 스타일
- `global.css` 하단의 `.grid-layout`, `.spec-list`, `.toggle-btn` 등으로 MDX 콘텐츠 스타일링
- 별도 컴포넌트 없이 HTML class 패턴으로 사용

---

## 8. 스타일 시스템

### 8.1 CSS 변수 (`global.css`)
- 색상: `--gray-0` ~ `--gray-999` (다크모드에서 반전)
- 액센트: `--accent-light/regular/dark` (보라색 계열)
- 그라데이션, 그림자, 타이포그래피

### 8.2 다크모드
- `<html class="theme-dark">` 토글
- `localStorage` 저장, `MainHead.astro`에서 blocking 초기화
- `ThemeToggle.astro` Web Component

### 8.3 MDX 콘텐츠 스타일 (`global.css` 하단)
- `.grid-layout`, `.grid-item`, `.grid-image` — 프로젝트 이미지 그리드
- `.two-column-grid` — 2열 레이아웃
- `.toggle-btn`, `.arrow`, `.spec-list` — 접기/펼치기 인터랙션
- 반응형 브레이크포인트: 768px, 480px, 50em(800px)

### 8.4 파일
- `global.css` — CSS 변수, 유틸리티, MDX 콘텐츠 스타일
- `about.css` — About + Algorithm 페이지 공유 스타일

---

## 9. 주요 페이지 구조

### `index.astro` (홈)
1. **Hero** — "Robot Developer" 타이틀, 자기소개
2. **Tech Stack** — `skills.ts` 데이터 → 카테고리별 그리드 (accent bar, stagger animation)
3. **Latest Projects** — 최신 2개 프로젝트 카드 (published된 것만)
4. **Connect** — `getSocialLinksFor("home")` → 소셜 링크 카드

### `about.astro`
1. **Hero** — "About Me"
2. **Career** — `career.ts` → 회사/직무/기간/업무/기술스택
3. **Education** — `education.ts` → 학력/증명서 링크 (HTML 유효: `<ul>` 안에 `<li>`만 포함)
4. **Certificate** — `CertSection.astro` 컴포넌트 × 3 (국가기술/전문/민간)
5. **Achievements** — `achievements.ts` → 수상 카드 그리드

### `project.astro`
- 카테고리 필터 버튼 (All / Robot / Embedded / ...)
- JS 기반 클라이언트사이드 필터링
- `PortfolioPreview` 카드 그리드

### `project/[...slug].astro`
- `role` 필드 표시 (역할)
- `github` 필드 → GitHub 링크 버튼
- `status === "진행중"` → 상단 알림 배너
- MDX `<Content />` 렌더링

### `algorithm.astro`
1. **온라인저지 프로필** — BOJ/solved.ac/CodeUp
2. **대회 개최** — 접기/펼치기 문제 목록
3. **문제 출제** — CodeUp + Notion 링크
4. **대회 참가 기록** — BOJ 대회별 풀이 기록 (접기/펼치기)
5. **알고리즘 대회** — 참가 대회 리스트

---

## 10. 소셜/연락처

| 플랫폼   | 링크                                          |
| -------- | --------------------------------------------- |
| Email    | dongwook.3.kim@gmail.com                      |
| GitHub   | https://github.com/dongwookkim3               |
| LinkedIn | https://www.linkedin.com/in/dongwook7/        |
| Blog     | https://swbsnewby7.tistory.com/               |
| BOJ      | https://www.acmicpc.net/user/dongwook7        |

> 전화번호, Discord, Instagram은 제거됨

---

## 11. 개발 시 주의사항

1. **프로젝트 추가:** `src/content/project/`에 `.mdx` 파일 생성 → frontmatter에 `published`, `category`, `role`, `github` 포함
2. **프로젝트 공개:** `published: true` (기본값) → 빌드 포함 / `published: false` → 빌드에서 제외
3. **MDX 문법:** `<img>` → `<img />`, `<br>` → `<br />` (자기 닫힘 필수). `style="..."` → `style={{...}}` (JSX 객체)
4. **MDX 스타일:** `<style>` 블록 사용 불가 — `global.css`에 추가하거나 컴포넌트 사용
5. **사이트 설정:** `src/data/site.ts`에서 이름/이메일/GitHub 등 중앙 관리. 하드코딩 금지
6. **데이터 추가:** 도메인별 `src/data/*.ts` 파일에 추가 (about.ts는 삭제됨)
7. **새 페이지:** `src/pages/`에 `.astro` 파일 생성 → `Nav.astro`의 `textLinks`에 추가
8. **소셜 링크:** `src/data/social.ts`에서 관리. `showIn` 배열로 표시 위치 제어
9. **about.css:** About + Algorithm 페이지가 공유 — 수정 시 양쪽 영향 확인
10. **아이콘:** `src/components/IconPaths.ts`에 SVG path 추가
11. **다크모드:** `:root.theme-dark` 또는 `:global(.theme-dark)` 사용
12. **프로젝트 조회:** `getPublishedProjects()` 사용 (직접 getCollection 호출 지양)

---

## 12. 변경 이력

| 날짜       | 변경 내용                                                        |
| ---------- | ---------------------------------------------------------------- |
| 2026-02-16 | 종합 리팩토링: 버그 수정, 중앙화, 중복 제거, 접근성 개선         |
| 2026-02-16 | site.ts 생성 (이름/이메일/GitHub 중앙화) + pageTitle() 헬퍼      |
| 2026-02-16 | projects.ts 생성 (getPublishedProjects 유틸리티)                 |
| 2026-02-16 | CertSection.astro 생성 (자격증 템플릿 3중 중복 제거)             |
| 2026-02-16 | HTML 오류 수정: lang="ko", `<div>` in `<ul>` 제거, max-width 수정 |
| 2026-02-16 | 오타 수정: CircuirMaker2→CircuitMaker2, 성징→성장               |
| 2026-02-16 | 미사용 코드 제거: 7개 content 컴포넌트, 4개 아이콘, .section-header CSS |
| 2026-02-16 | 접근성: aria-label, aria-expanded, rel="noopener", 404 홈 링크   |
| 2026-02-16 | 네이밍 정규화: Profile→url, NotionLink→notionLink, Nums→nums    |
| 2026-02-16 | `<br />` 스페이서 제거 → CSS margin으로 대체                     |
| 2026-02-16 | 중복 스타일 제거: .no-underline, .arrow/.problem-list (about.css) |
| 2025-07-16 | project published/unpublished 기능 추가                          |
| 2025-07-16 | 대규모 리팩터링: 학생 → 전문 포트폴리오 전환                     |
| 2025-07-16 | @astrojs/mdx 도입, .md → .mdx 마이그레이션                      |
| 2025-07-16 | 데이터 분리: about.ts → types/social/skills/career/education/certificates/achievements/algorithm |
| 2025-07-16 | index.astro 전면 재작성 (Hero+TechStack+Projects+Connect)        |
| 2025-07-16 | about.astro 전면 재작성 (Career+Education+Certificate+Achievements) |
| 2025-07-16 | project.astro에 카테고리 필터 추가                               |
| 2025-07-16 | project/[...slug].astro에 role, github 필드 표시 추가            |
| 2025-07-16 | algorithm.astro 데이터 소스 변경 + 대회 참가 기록/대회 목록 섹션 추가 |
| 2025-07-16 | Nav.astro, Footer.astro를 social.ts의 getSocialLinksFor() 연동   |
| 2025-07-16 | global.css에 MDX 콘텐츠 스타일 통합 (grid-layout, spec-list 등)  |
| 2025-07-16 | content.config.ts 스키마 확장 (category, role, github 필드)      |
| 2025-02-16 | 전화번호, Instagram, Discord 정보 제거                           |
| 2025-02-16 | 최초 claude.md 문서 작성                                         |
