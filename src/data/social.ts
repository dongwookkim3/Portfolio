import type { SocialLink } from './types';

export const socialLinks: SocialLink[] = [
    {
        id: 'email',
        label: 'Email',
        href: 'mailto:dongwook.3.kim@gmail.com',
        icon: 'paper-plane-tilt',
        showIn: ['nav', 'footer', 'home'],
    },
    {
        id: 'github',
        label: 'GitHub',
        href: 'https://github.com/dongwookkim3',
        icon: 'github-logo',
        showIn: ['nav', 'footer', 'home'],
    },
    {
        id: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/dongwook7/',
        icon: 'linkedin-logo',
        showIn: ['nav', 'footer', 'home'],
    },
    {
        id: 'blog',
        label: 'Blog',
        href: 'https://swbsnewby7.tistory.com/',
        icon: 'pencil-line',
        showIn: ['footer', 'home'],
    },
    {
        id: 'boj',
        label: 'BOJ',
        href: 'https://www.acmicpc.net/user/dongwook7',
        icon: 'code',
        showIn: ['home'],
    },
];

/** 특정 위치에 표시할 소셜 링크만 필터링 */
export function getSocialLinksFor(location: 'nav' | 'footer' | 'home') {
    return socialLinks.filter((link) => link.showIn.includes(location));
}
