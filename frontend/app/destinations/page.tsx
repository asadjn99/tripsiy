import type { Metadata } from "next";
import HeroSection from "@/../components/sections/destinations/HeroSection";
import DestinationsGrid from "@/../components/sections/destinations/DestinationsGrid";
import FeaturedDestinations from "@/../components/sections/destinations/FeaturedDestinations";
import ExploreCategories from "@/../components/sections/destinations/ExploreCategories";

export const metadata: Metadata = {
  title: "Contact Us | Tripsiy",
  description: "Get in touch with Tripsiy for your next adventure.",
};

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-white">

      <HeroSection />
      <DestinationsGrid />
      <FeaturedDestinations />
      <ExploreCategories />
      
    </main>
  );
}