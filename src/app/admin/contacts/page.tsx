export const runtime = "nodejs";

import sql from "@/app/lib/db";

export default async function AdminContacts() {
  try {
    const contacts = await sql`
      SELECT * FROM contact_messages
      ORDER BY created_at DESC
    `;

    return (
      <div style={{ padding: "2rem" }}>
        <h1>Contacts</h1>

        {contacts.length === 0 ? (
          <p>No messages yet</p>
        ) : (
          <ul>
            {contacts.map((c: any) => (
              <li key={c.id}>
                <strong>{c.name}</strong> — {c.email}
                <br />
                {c.subject}
                <br />
                {c.message}
                <hr />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  } catch (err) {
    return <p>DB connection error</p>;
  }
}