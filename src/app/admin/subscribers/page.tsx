import { getRequestContext } from '';

export const runtime = 'nodejs';

export default async function AdminSubscribers() {
  const db = getRequestContext().env.DB;
  const { results } = await db.prepare('SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC').all();
  return (
    <div>
      <h1>Subscribers</h1>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}
