import type { CareerItem } from './types';

export const careerData: CareerItem[] = [
    // TODO: 실제 경력 정보로 교체
    {
        company: 'Company Name',
        position: 'Robot Developer',
        period: '2026.02 ~ 현재',
        description: '로봇 시스템 개발 및 임베디드 소프트웨어 엔지니어링',
        tasks: [
            '자율주행 로봇 펌웨어 개발',
            'ROS2 기반 로봇 시스템 설계',
            'STM32 기반 모터 제어 시스템 구현',
        ],
        techStack: ['ROS2', 'STM32', 'C++', 'Python'],
    },
];
