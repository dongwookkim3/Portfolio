// ─── Site Configuration ─────────────────────────
// 사이트 전역에서 사용되는 설정값을 중앙 관리합니다.

export const siteConfig = {
    /** 사이트 소유자 이름 */
    name: 'Dongwook Kim',
    /** 사이트 기본 타이틀 */
    title: 'Dongwook Kim',
    /** 사이트 기본 설명 */
    description: 'Dongwook Kim - Portfolio',
    /** 연락처 이메일 */
    email: 'dongwook.3.kim@gmail.com',
    /** GitHub URL */
    github: 'https://github.com/dongwookkim3',
} as const;

/** 페이지별 타이틀 생성 헬퍼 */
export function pageTitle(page?: string): string {
    return page ? `${page} | ${siteConfig.name}` : siteConfig.title;
}
