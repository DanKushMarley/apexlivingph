import sql from "@/app/lib/db";

export const runtime = "nodejs";

export default async function AdminContacts() {
  const contacts = await sql`
    SELECT * FROM contact_messages
    ORDER BY created_at DESC
  `;

  return (
    <div>
      <h1>Contacts</h1>
      {contacts.map((c: any) => (
        <div key={c.id} style={{ marginBottom: "1rem" }}>
          <p><b>{c.name}</b> ({c.email})</p>
          <p>{c.subject}</p>
          <p>{c.message}</p>
        </div>
      ))}
    </div>
  );
}