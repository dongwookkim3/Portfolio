import type { iconPaths } from '../components/IconPaths';

// ─── Social & Contact ───────────────────────────────────────
export interface SocialLink {
    id: string;
    label: string;
    href: string;
    icon: keyof typeof iconPaths;
    showIn: ('nav' | 'footer' | 'home')[];
}

// ─── Career ─────────────────────────────────────────────────
export interface CareerItem {
    company: string;
    position: string;
    period: string;
    description: string;
    tasks: string[];
    techStack?: string[];
}

// ─── Skills ─────────────────────────────────────────────────
export interface SkillCategory {
    category: string;
    items: string[];
}

// ─── Education ──────────────────────────────────────────────
export interface EducationItem {
    school: string;
    period: string;
    department?: string;
    certificate_pdf_ko?: string;
    certificate_pdf_en?: string;
    certificate_web?: string;
    good?: string;
}

// ─── Certificate ────────────────────────────────────────────
export interface CertificateItem {
    title: string;
    date: string;
    link?: string;
}

export interface CertificateData {
    national: CertificateItem[];
    specialty: CertificateItem[];
    private: CertificateItem[];
}

// ─── Achievements ───────────────────────────────────────────
export interface AchievementItem {
    title: string;
    date: string;
    award: string;
    isTeam: boolean;
    teamDetail?: string;
    team?: string[];
    certificate_pdf_ko?: string;
    certificate_pdf_ko2?: string;
}

// ─── Algorithm ──────────────────────────────────────────────
export interface ContestData {
    id: string;
    title: string;
    date: string;
    link: string;
    problems: string[];
    problemsNum?: (number | string)[];
    nums?: string[];
}

export interface AlgorithmContestItem {
    title: string;
    date: string;
}

export interface OnlineJudgeItem {
    title: string;
    url: string;
    rank: string;
}

export interface ProblemCreationItem {
    title: string;
    date: string;
    platform: string;
    problemNum: number;
    notionLink: string;
}
