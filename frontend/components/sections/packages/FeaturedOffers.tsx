"use client";

import Image from "next/image";
import Link from "next/link";

//  Data
const offers = [
  {
    id: 1,
    title: "Summer in Santorini – 20% Off!",
    subtitle: "Limited-time offer valid till July 31.",
    image: "/packages/fet-1.png", 
    link: "/offers/santorini",
  },
  {
    id: 2,
    title: "Maldives Honeymoon Escape – 15% Off",
    subtitle: "Enjoy beachfront villas with romantic private dinners.",
    image: "/packages/fet-2.png",
    link: "/offers/maldives",
  },
];

const FeaturedOffers = () => {
  return (
    <section className="bg-[#FFF8F0] py-16 sm:py-24">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Featured Offer
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              
              className="relative h-62 sm:h-70 lg:h-80 w-full rounded-3xl overflow-hidden group shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Dark Overlay ka zrurat o */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Content Container  */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-8">
                
                {/* Title */}
                <h3 className="text-white text-xl sm:text-2xl font-semibold tracking-wide mb-3 drop-shadow-md">
                  {offer.title}
                </h3>
                
                {/* Subtitle  */}
                <p className="text-white/90 text-xs sm:text-sm font-regular tracking-wide  mb-8 max-w-md drop-shadow-sm">
                  {offer.subtitle}
                </p>

                {/* Button */}
                <Link
                  href={offer.link}
                  className="bg-white text-gray-900 hover:bg-gray-100 transition-colors font-bold tracking-wide px-6 py-2.5 rounded-lg shadow-md text-sm sm:text-base"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedOffers;