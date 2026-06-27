import { supabase } from "@/lib/supabaseClient";
import InquiryForm from "@/components/InquiryForm";

async function getProperty(id: string) {
  const { data } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .single();

  return data;
}

export default async function PropertyPage({
  params,
}: {
  params: { id: string };
}) {
  const property = await getProperty(params.id);

  if (!property) {
    return <div className="p-10">Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">

      {/* IMAGE */}
      <div className="relative h-[60vh]">
        <img
          src={property.image_url}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="absolute bottom-8 left-10 text-white text-4xl font-bold">
          {property.title}
        </h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-10 py-10">

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary">
            {property.location}
          </h2>

          <p className="text-2xl font-bold text-gold">
            ₱{Number(property.price).toLocaleString()}
          </p>
        </div>

        <p className="mt-6 text-gray-600">
          {property.description}
        </p>

        {/* INQUIRY FORM */}
        <InquiryForm propertyId={property.id} />

      </div>

    </div>
  );
}