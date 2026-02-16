import { getCollection } from 'astro:content';

/** 공개된 프로젝트를 최신순으로 정렬하여 반환 */
export async function getPublishedProjects() {
    return (await getCollection('project'))
        .filter((p) => p.data.published !== false)
        .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}
