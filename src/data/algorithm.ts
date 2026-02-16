import type { ContestData, AlgorithmContestItem, OnlineJudgeItem, ProblemCreationItem } from './types';

/** BOJ 대회 문제 풀이 기록 (참가) */
export const contestData: ContestData[] = [
    {
        id: 'A',
        title: '2024 하반기 전남대학교 PIMM 알고리즘 파티',
        date: '2024.09',
        link: 'https://www.acmicpc.net/category/detail/4296',
        problems: ['더블팰린드롬', '근성아 일하자'],
        problemsNum: [32357, 32358],
        nums: ['A', 'B'],
    },
    {
        id: 'B',
        title: '가희와 함께 하는 7회 코딩테스트',
        date: '2024.11',
        link: 'https://www.acmicpc.net/category/detail/4357',
        problems: ['가희와 4시간의 벽 1', '가희와 4시간의 벽 2', '가희와 서울 지하철 2호선', '가희와 부역명', '가희와 전기 요금 1', '가희와 클럽 오디션 3', 'gahui and sousenkyo 7', '가희와 전기 요금 2'],
        problemsNum: [32775, 32776, 32777, 32778, 32779, 32780, 32786, 32783],
        nums: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I'],
    },
    {
        id: 'C',
        title: '2024 서울시립대학교 프로그래밍 경진대회(UOSPC)',
        date: '2024.12',
        link: 'https://www.acmicpc.net/category/1072',
        problems: ['UOS 문자열', '슈팅 연습', '드론 조작'],
        problemsNum: [32929, 32930, 32932],
        nums: ['A', 'B', 'D'],
    },
    {
        id: 'D',
        title: '제1회 대전과학고등학교 프로그래밍 경진대회 DSHStack',
        date: '2024.12',
        link: 'https://www.acmicpc.net/category/detail/4370',
        problems: ['왜 맘대로 예약하냐고', '그래프와 그래프', '자리 신청'],
        problemsNum: [32941, 32942, 32943],
        nums: ['A', 'B', 'C'],
    },
    {
        id: 'E',
        title: '2025 KSA Automata Winter Contest',
        date: '2025.02',
        link: 'https://www.acmicpc.net/category/detail/4436',
        problems: ['아름다운 수열', '수열의 점수', '자습 째기', 'KSA 문자열 2', '미술 수업', '저녁 태권도'],
        problemsNum: [33488, 33489, 33491, 33495, 33496, 33497],
        nums: ['A', 'E', 'G', 'I', 'C', 'B'],
    },
    {
        id: 'F',
        title: '제2회 유틸컵',
        date: '2025.03',
        link: 'https://www.acmicpc.net/category/detail/4443',
        problems: ['Java String Equals', '곱셈을 누가 이렇게 해 ㅋㅋ', 'Texture Wrapping', 'Infinite Array Swaps', '수상한 어릿광대'],
        problemsNum: [33556, 33557, 33558, 33559, 33560],
        nums: ['☕🔤🟰', '🅰️✖️🅱️', ' 🏁✂️', '🔁♾️', '🤔🤡 '],
    },
    {
        id: 'G',
        title: 'DJMJ 포에버컵',
        date: '2025.03',
        link: 'https://www.acmicpc.net/category/detail/4455',
        problems: ['1교시: 가정', '2교시: 체육', '3교시: 수학', '4교시: 국어 (Easy)', '─점심시간─', '5교시: 과학', '6교시: 국어 (Hard)'],
        problemsNum: [33631, 33632, 33633, 33634, 33635, 33636, 33637],
        nums: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    },
    {
        id: 'H',
        title: '2025 상반기 전남대학교 PIMM 알고리즘 파티',
        date: '2025.03',
        link: 'https://www.acmicpc.net/category/detail/4462',
        problems: ['치매예방수칙 3.3.3', '비장의 일격 (Small)'],
        problemsNum: [33709, 33710],
        nums: ['A', 'B'],
    },
    {
        id: 'I',
        title: '경희대학교 2025 봄 프로그래밍 경시대회 KHSPC 2025',
        date: '2025.05',
        link: 'https://www.acmicpc.net/category/detail/4490',
        problems: ['태권도와 복싱을 합한 운동', '간단한 동전 문제 (Easy)'],
        problemsNum: [33937, 33938],
        nums: ['A', 'B'],
    },
];

/** 개최한 대회 */
export const organizedContests: ContestData[] = [
    {
        id: 'A',
        title: '2025 부산소프트웨어마이스터고등학교 교내 알고리즘 경진대회',
        date: '2025.07',
        link: 'https://github.com/BSSM-Algorithm-Competition-Not-official/2025-First-Half-Algorithm-Competition',
        problems: ['우리의 친구 알이', '선생님을 도와드리자', '체스는 어려워', '목이 너무 아파요', '친구들과 족구를 해보자', '학교 급식 먹기'],
        problemsNum: ['1학년/A. 우리의 친구 알이.md', '1학년/B. 선생님을 도와드리자.md', '1학년/C. 체스는 어려워', '1학년/D. 목이 너무 아파요', '1학년/E. 친구들과 족구를 해보자.md', '1학년/F. 학교 급식 먹기.md'],
        nums: ['1 - A', '1 - B', '1 - C', '1 - D', '1 - E', '1 - F'],
    },
];

/** 참가한 알고리즘 대회 목록 */
export const algorithmContestData: AlgorithmContestItem[] = [
    { title: '2025 한국정보올림피아드 2차 대회', date: '2025.07' },
    { title: '2025 한국정보올림피아드 1차 대회', date: '2025.07' },
    { title: '제6회 MatkorCup', date: '2025.02' },
    { title: 'SFPC 2024', date: '2025.01' },
    { title: '2024 NYPC 2 Round', date: '2024.09' },
    { title: '2024 NYPC 1 Round', date: '2024.08' },
    { title: '2024 한국정보올림피아드 2차 대회', date: '2024.07' },
    { title: '2024 한국정보올림피아드 1차 대회', date: '2024.05' },
    { title: 'solved.ac Grand Arena Party', date: '2024.02' },
    { title: 'SFPC 2023', date: '2024.01' },
    { title: '2023 부산소프트웨어마이스터고등학교 교내 알고리즘 경진대회', date: '2023.09' },
    { title: '2023 NYPC 1 Round', date: '2023.08' },
];

/** 온라인저지 프로필 */
export const onlineJudgeProfiles: OnlineJudgeItem[] = [
    {
        title: 'BOJ',
        url: 'https://www.acmicpc.net/user/dongwook7',
        rank: '2455문제, 299위',
    },
    {
        title: 'solved.ac',
        url: 'https://solved.ac/profile/dongwook7',
        rank: 'Platinum 2, 2449위',
    },
    {
        title: 'CodeUp',
        url: 'https://codeup.kr/userinfo.php?user=dongwook7459',
        rank: '1155문제, 28위',
    },
];

/** 출제한 문제 */
export const problemCreationData: ProblemCreationItem[] = [
    {
        title: '지원이의 여자친구 ( 2024.03 )',
        date: '2024.03',
        platform: 'CodeUp',
        problemNum: 2054,
        notionLink: 'https://wirehaired-equipment-793.notion.site/1bcdb8d457cc80e7a522f9760c6440d9',
    },
];
