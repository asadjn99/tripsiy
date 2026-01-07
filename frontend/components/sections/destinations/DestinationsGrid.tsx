import Image from "next/image";
import Link from "next/link";

// Data Items
const destinations = [
  {
    id: 1,
    title: "Sri Lanka",
    description: "Golden coasts, lush tea hills, and cultural wonders.",
    image: "/destinations/img-1.png",
    link: "/packages/srilanka",
  },
  {
    id: 2,
    title: "New York",
    description: "The city that never sleeps — iconic landmarks and energy.",
    image: "/destinations/img-2.png",
    link: "/packages/newyork",
  },
  {
    id: 3,
    title: "Istanbul",
    description: "Where East meets West — rich history and bazaars.",
    image: "/destinations/img-3.png",
    link: "/packages/istanbul",
  },
  {
    id: 4,
    title: "Switzerland",
    description: "Snowy peaks and serenity — a fairytale escape.",
    image: "/destinations/img-4.png",
    link: "/packages/switzerland",
  },
  {
    id: 5,
    title: "Bali",
    description: "A tropical haven of beaches and tranquility.",
    image: "/destinations/img-4.png",
    link: "/packages/bali",
  },
  {
    id: 6,
    title: "Dubai",
    description: "Experience the perfect blend of luxury and culture.",
    image: "/destinations/img-1.png",
    link: "/packages/dubai",
  },
  {
    id: 7,
    title: "Kenya",
    description: "Witness the wild heart of Africa and safari adventures.",
    image: "/destinations/img-1.png",
    link: "/packages/kenya",
  },
  {
    id: 8,
    title: "Paris",
    description: "Romance, art, and café culture in the City of Lights.",
    image: "/destinations/img-1.png",
    link: "/packages/paris",
  },
  {
    id: 9,
    title: "Tokyo",
    description: "Neon streets, ancient temples, and cutting-edge tech.",
    image: "/destinations/img-1.png",
    link: "/packages/tokyo",
  },
  {
    id: 10,
    title: "Maldives",
    description: "Crystal clear waters and overwater bungalows.",
    image: "/destinations/img-1.png",
    link: "/packages/maldives",
  },
  {
    id: 11,
    title: "Rome",
    description: "Walk through history in the Eternal City.",
    image: "/destinations/img-1.png",
    link: "/packages/rome",
  },
  {
    id: 12,
    title: "London",
    description: "Royal heritage and historic streets in the UK capital.",
    image: "/destinations/img-1.png",
    link: "/packages/london",
  },
];

const DestinationsGrid = () => {
  return (
    <section className="bg-[#FFF9F5] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-2">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked destinations for your next adventure.
          </p>
        </div>

        {/* Responsive Grid: 1 col (mobile) -> 2 cols (tablet) -> 4 cols (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col shadow-sm"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-2 flex flex-col grow text-start">
                {/* Title */}
                <h3 className="text-lg tracking-wide font-bold text-gray-900 mb-1 mt-1">
                  {pkg.title}
                </h3>
                
                {/* Description (Replaces Duration/Price) */}
                <p className="text-xs tracking-wide text-gray-500 mb-4 font-medium">
                  {pkg.description}
                </p>

                {/* Button */}
                <div className="mt-auto mb-2 flex justify-center">
                  <Link
                    href={pkg.link}
                    className="px-8 bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md text-center"
                  >
                    View Packages
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DestinationsGrid;