import type { Metadata } from "next";
import AboutHero from "@/../components/sections/about/AboutHero";
import OurJourney from "@/../components/sections/about/OurJourney";
import WhatWeOffer from "../../components/sections/about/WhatWeOffer";
import WhyChooseUsFeatures from "@/../components/sections/about/WhyChooseUsFeatures";

export const metadata: Metadata = {
  title: "About Us | Tripsiy",
  description: "Learn about Tripsiy, a UAE-based travel company turning dream vacations into real adventures.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      
      <AboutHero />
      <OurJourney />
      <WhatWeOffer />
      <WhyChooseUsFeatures />
      

    </main>
  );
}