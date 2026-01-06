import Hero from "@/../components/sections/Hero";
import PopularDestinations from "@/../components/sections/PopularDestinations";
import FeaturedPackages from "@/../components/sections/FeaturedPackages";
import WhyChooseUs from "@/../components/sections/WhyChooseUs";
import Testimonials from "@/../components/sections/Testimonials";



export default function Home() {
  return (
    <main className="min-h-screen">
     
      <Hero />
      
      
      <PopularDestinations />
      <FeaturedPackages />
      <WhyChooseUs />
      <Testimonials />

     
    </main>
  );
}