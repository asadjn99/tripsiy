import Image from "next/image";
import Link from "next/link";

const featuredDestinations = [
  {
    id: 1,
    title: "Dubai",
    image: "/destinations/fet-1.png",
    link: "/packages/dubai",
  },
  {
    id: 2,
    title: "Bali",
    image: "/destinations/fet-2.png",
    link: "/packages/bali",
  },
  {
    id: 3,
    title: "Paris",
    image: "/destinations/fet-3.png", 
    link: "/packages/paris",
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900">
            Featured Destinations
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featuredDestinations.map((dest) => (
            <Link key={dest.id} href={dest.link} className="group block">
              <div className="relative h-87.5 md:h-100 lg:h-120 w-full rounded-xl overflow-hidden">
                
                {/* Background Image */}
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Dark Overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90" /> */}

                {/* Card Title */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-center">
                  <h3 className="text-white text-3xl sm:text-4xl font-bold text-center mb-2">
                    {dest.title}
                  </h3>
                </div>
                
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedDestinations;