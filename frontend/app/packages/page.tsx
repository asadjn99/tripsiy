import type { Metadata } from "next";

import HeroSection from "@/../components/sections/packages/HeroSection";
import TopPackages from "@/../components/sections/packages/TopPackages";
import FeaturedOffers from "@/../components/sections/packages/FeaturedOffers";


export const metadata: Metadata = {
  title: "Services | Tripsiy",
  description: "Learn about Tripsiy, a UAE-based travel company turning dream vacations into real adventures.",
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen">
      
      <HeroSection />
      <TopPackages />
      <FeaturedOffers />
      

    </main>
  );
}