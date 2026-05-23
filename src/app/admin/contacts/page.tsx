export const runtime = 'nodejs';

export default async function AdminContacts() {
  const db = process.env.DB;

  if (!db) {
    return (
      <div>
        <h1>Contacts</h1>
        <p>DB not configured</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Contacts</h1>
      <p>DB connected but not queried yet</p>
    </div>
  );
}