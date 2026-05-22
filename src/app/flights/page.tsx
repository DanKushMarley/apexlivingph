import FlightForm from "@/app/components/FlightForm";

export default function FlightsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Flight Booking</h1>

      <FlightForm />
    </main>
  );
}