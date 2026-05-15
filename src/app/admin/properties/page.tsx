import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export default async function AdminProperties() {
  const db = getRequestContext().env.DB;
  const { results } = await db.prepare('SELECT * FROM properties ORDER BY created_at DESC').all();
  return (
    <div>
      <h1>Properties</h1>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}
