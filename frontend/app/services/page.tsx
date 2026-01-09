import type { Metadata } from "next";
import ServicesHero from "@/../components/sections/services/ServicesHero";
import ServicesSection from "@/../components/sections/services/ServicesSection";


export const metadata: Metadata = {
  title: "Services | Tripsiy",
  description: "Learn about Tripsiy, a UAE-based travel company turning dream vacations into real adventures.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      
      <ServicesHero />
      <ServicesSection />
      

    </main>
  );
}