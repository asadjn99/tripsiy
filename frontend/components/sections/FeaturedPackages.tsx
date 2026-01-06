import Image from "next/image";
import Link from "next/link";
import { featuredPackages } from "@/../app/constants/packages";

const FeaturedPackages = () => {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-2">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked tours for an unforgettable experience.
          </p>
        </div>

        {/* Responsive Grid: 1 col (mobile) -> 2 cols (tablet) -> 4 cols (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-2 flex flex-col grow">
                {/* Title */}
                <h3 className="text-lg tracking-wide font-bold text-gray-900 mb-1">
                  {pkg.title}
                </h3>
                
                {/* Duration */}
                <p className="text-xs tracking-wide text-gray-500 mb-4 font-medium">
                  {pkg.duration}
                </p>

                {/* Price Section */}
                <div className="mt-auto mb-2">
                  <p className="text-gray-500 tracking-wide text-[16px]">
                    Starting from{" "}
                    <span className="text-primary font-bold text-[16px]">
                      {pkg.currency} {pkg.price}
                    </span>
                  </p>
                </div>

                {/* Button */}
                <div className="flex justify-center">
                  <Link
                    href={pkg.link}
                    className="px-12 bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md text-center"
                  >
                    Book Now
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

export default FeaturedPackages;