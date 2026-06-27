import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Search from "@/components/landing/Search";
import Features from "@/components/landing/Features";
import Destinations from "@/components/landing/Destinations";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="bg-[#f8f6f1]">
      <Navbar />
      <Hero />
      <Search />
      <Features />
      <Destinations />
      <Footer />
    </main>
  );
}