import { getProperties } from "@/lib/properties";

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <div style={{ padding: 20 }}>
      <h1>Properties</h1>

      {properties?.map((p) => (
        <div key={p.id} style={{ marginBottom: 20 }}>
          <h2>{p.title}</h2>
          <p>{p.location}</p>
          <p>₱{p.price}</p>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}