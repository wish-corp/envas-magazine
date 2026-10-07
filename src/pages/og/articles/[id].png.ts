import { renderOgImage } from '../../../og/render';
import { getSortedArticles } from '../../../lib/articles';

export async function getStaticPaths() {
  const entries = await getSortedArticles();
  return entries.map((entry) => ({ params: { id: entry.id }, props: { title: entry.data.title } }));
}

export async function GET({ props }: { props: { title: string } }) {
  return new Response(await renderOgImage(props.title), { headers: { 'Content-Type': 'image/png' } });
}
