import { getCollection, type CollectionEntry } from 'astro:content';

export type ArticleEntry = CollectionEntry<'articles'>;

export async function getSortedArticles(): Promise<ArticleEntry[]> {
  const entries = await getCollection('articles');
  return entries.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime() || b.id.localeCompare(a.id),
  );
}
