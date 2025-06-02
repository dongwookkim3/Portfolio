interface ContestData {
    id: string;
    title: string;
    date: string;
    link: string;
    problems: string[];
    problemsNum?: number[];
    Nums?: string[];
}

interface EducationData {
    school: string;
    period: string;
    department?: string;
    certificate_pdf_ko?: string;
    certificate_pdf_en?: string;
    certificate_web?: string;
    good?: string;
}

export const contestData = [
    {
        id: 'A',
        title: '2024 하반기 전남대학교 PIMM 알고리즘 파티',
        date: '2024.09',
        link: 'https://www.acmicpc.net/category/detail/4296',
        problems: ['더블팰린드롬', '근성아 일하자'],
        problemsNum: [32357, 32358],
        Nums: ['A', 'B']
    },
    {
        id: 'B',
        title: '가희와 함께 하는 7회 코딩테스트',
        date: '2024.11',
        link: 'https://www.acmicpc.net/category/detail/4357',
        problems: ['가희와 4시간의 벽 1', '가희와 4시간의 벽 2', '가희와 서울 지하철 2호선', '가희와 부역명', '가희와 전기 요금 1', '가희와 클럽 오디션 3', 'gahui and sousenkyo 7', '가희와 전기 요금 2'],
        problemsNum: [32775, 32776, 32777, 32778, 32779, 32780, 32786, 32783],
        Nums: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I']
    },
    {
        id: 'C',
        title: '2024 서울시립대학교 프로그래밍 경진대회(UOSPC)',
        date: '2024.12',
        link: 'https://www.acmicpc.net/category/1072',
        problems: ['UOS 문자열', '슈팅 연습', '드론 조작'],
        problemsNum: [32929, 32930, 32932],
        Nums: ['A', 'B', 'D']
    },
    {
        id: 'D',
        title: '제1회 대전과학고등학교 프로그래밍 경진대회 DSHStack',
        date: '2024.12',
        link: 'https://www.acmicpc.net/category/detail/4370',
        problems: ['왜 맘대로 예약하냐고', '그래프와 그래프', '자리 신청'],
        problemsNum: [32941, 32942, 32943],
        Nums: ['A', 'B', 'C']
    },
    {
        id: 'E',
        title: '2025 KSA Automata Winter Contest',
        date: '2025.02',
        link: 'https://www.acmicpc.net/category/detail/4436',
        problems: ['아름다운 수열', '수열의 점수', '자습 째기', 'KSA 문자열 2', '미술 수업', '저녁 태권도'],
        problemsNum: [33488, 33489, 33491, 33495, 33496, 33497],
        Nums: ['A', 'E', 'G', 'I', 'C', 'B']
    },
    {
        id: 'F',
        title: '제2회 유틸컵',
        date: '2025.03',
        link: 'https://www.acmicpc.net/category/detail/4443',
        problems: ['Java String Equals', '곱셈을 누가 이렇게 해 ㅋㅋ', 'Texture Wrapping', 'Infinite Array Swaps', '수상한 어릿광대'],
        problemsNum: [33556, 33557, 33558, 33559, 33560],
        Nums: ['☕🔤🟰', '🅰️✖️🅱️', ' 🏁✂️', '🔁♾️', '🤔🤡 ']
    },
    {
        id: 'G',
        title: 'DJMJ 포에버컵',
        date: '2025.03',
        link: 'https://www.acmicpc.net/category/detail/4455',
        problems: ['1교시: 가정', '2교시: 체육', '3교시: 수학', '4교시: 국어 (Easy)', '─점심시간─', '5교시: 과학', '6교시: 국어 (Hard)'],
        problemsNum: [33631, 33632, 33633, 33634, 33635, 33636, 33637],
        Nums: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    },
    {
        id: 'H',
        title: '2025 상반기 전남대학교 PIMM 알고리즘 파티',
        date: '2025.03',
        link: 'https://www.acmicpc.net/category/detail/4462',
        problems: ['치매예방수칙 3.3.3', '비장의 일격 (Small)'],
        problemsNum: [33709, 33710],
        Nums: ['A', 'B']
    }
];

export const educationData: EducationData[] = [
    {
        school: '부산 소프트웨어 마이스터고등학교',
        period: '2023.03 ~ 현재 ( 2026.01 예정 )',
        department: '임베디드 소프트웨어과'
    },
    
    {
        school: 'AI 커리어 스쿨 for 엔지니어',
        period: '2024.12 ~ 2025.02',
        department: '데이터 분석, 머신러닝, 딥러닝, LLM, 프롬프트 엔지니어링',
        certificate_pdf_ko: '../../assets/certificates/education/AI커리어스쿨_수료증_김동욱.pdf',
        certificate_pdf_en: '../../assets/certificates/education/AI커리어스쿨_수료증_KIM DONG WOOK.pdf'
    },
    {
        school: 'IT 꿈나무 성장지원사업 화이트해커 양성교육',
        period: '2024.06 ~ 2024.11',
        department: '정보보안개론, 해킹(애플리케이션, 네트워크, 웹, 앱), 취약점 진단, 침해사고 대응, 악성코드 분석',
        certificate_pdf_ko: '../../assets/certificates/education/IT_꿈나무_성징지원사업_화이트해커_양성교육.pdf',
        good:'../../assets/certificates/20250401210558238-1_rotated.pdf'
    },
    {
        school: 'National University of Singapore 디자인 교육',
        period: '2024.05',
        department: 'Fundamentals of UI/UX Design',
        certificate_pdf_en: '../../assets/certificates/education/National_University_of_Singapore_디자인교육.pdf',
        certificate_web: 'https://credentials.nus.edu.sg/017d78c0-dd71-46db-9db6-2c3155a73787#acc.1vbBGTs3'
    }
];

export const certificateData = {
    national: [
        {
            title: '정보처리산업기사',
            date: '2024.07',
            link: '../../assets/certificates/certificate/정보처리산업기사_과정평가형.pdf'
        },
        {
            title: '전자계산기기능사 - 필기합격',
            date: '진행중'
        }
    ],
    specialty:[
        {
            title: '무인동력비행장치 4종 무인멀티콥터',
            date: '2025.05',
            link: '../../assets/certificates/A.pdf'
        },
    ],
    private: [
        {
            title: 'PCCE Level 3 C++',
            date: '2024.10',
            link: '../../assets/certificates/certificate/PCCE_Lv.3_C++.pdf'
        },
        {
            title: 'COS Pro 1급 C++',
            date: '2024.11',
            link: '../../assets/certificates/certificate/COS_Pro_1급_C++.pdf'
        }
    ]
};

export const OnlineJudgeProfile = [
    {
        title: 'BOJ',
        Profile: 'https://www.acmicpc.net/user/dongwook7',
        rank: '2195문제, 350위'
    },
    {
        title: 'solved.ac',
        Profile: 'https://solved.ac/profile/dongwook7',
        rank: 'Gold1, 13389위'
    },
    {
        title: 'CodeUp',
        Profile: 'https://codeup.kr/userinfo.php?user=dongwook7459',
        rank: '1073문제, 53위'
    }
];

export const algorithmContestData = [
    
    
    {
        title: '제6회 MatkorCup',
        date: '2025.02'
    },{
        title: 'SFPC 2024',
        date: '2025.01'
    },
    {
        title: '2024 NYPC 2 Round',
        date: '2024.09'
    },
    {
        title: '2024 NYPC 1 Round',
        date: '2024.08'
    },
    {
        title: '2024 한국정보올림피아드 2차 대회',
        date: '2024.07'
    },
    {
        title: '2024 한국정보올림피아드 1차 대회',
        date: '2024.05'
    },
    {
        title: 'solved.ac Grand Arena Party',
        date: '2024.02'
    },
    {
        title: 'SFPC 2023',
        date: '2024.01'
    },
    {
        title: '2023 부산소프트웨어마이스터고등학교 교내 알고리즘 경진대회',
        date: '2023.09'
    },
    {
        title: '2023 NYPC 1 Round',
        date: '2023.08'
    }
];

export const problemCreationData = [
    {
        title: '지원이의 여자친구 ( 2024.03 )',
        date: '2024.03',
        platform: 'CodeUp',
        problemNum: 2054,
        NotionLink: 'https://wirehaired-equipment-793.notion.site/1bcdb8d457cc80e7a522f9760c6440d9'
    }
];