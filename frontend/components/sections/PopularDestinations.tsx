import Image from "next/image";
import Link from "next/link";
import { popularDestinations } from "@/../app/constants/destinations";

const PopularDestinations = () => {
  return (
    <section className="bg-[#fcf9f7] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-3">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl  font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg pb-6 text-gray-600 max-w-2xl mx-auto">
            Explore the most loved travel spots this season.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDestinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative h-100 w-full rounded-2xl overflow-hidden bg-gray-100"
            >
              
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover scale-115 transition-transform duration-700 ease-out group-hover:scale-125"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={destination.id <= 2}
              />

             

              {/* Content Container */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
                
                {/* Text Section */}
                <div className="text-left w-full">
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-white/90 text-lg font-medium">
                    {destination.tagline}
                  </p>
                </div>
                
                {/* Button Section */}
                <div className="w-full flex justify-center pb-2">
                  <Link
                    href={destination.link}
                    className="bg-primary text-white px-10 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-none text-center"
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

export default PopularDestinations;