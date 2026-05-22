import { getRequestContext } from '';

export const runtime = 'nodejs';

export default async function AdminTours() {
  const db = getRequestContext().env.DB;
  const { results } = await db.prepare('SELECT * FROM tour_inquiries ORDER BY created_at DESC').all();
  return (
    <div>
      <h1>Tour Inquiries</h1>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}
