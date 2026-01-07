import Image from "next/image";

// Data for the 6 cards shown in your design
const offers = [
  {
    title: "Custom Travel Packages",
    description: "Personalized itineraries designed around your preferences, budget, and dream destinations.",
    icon: "/about/icon-1.png", 
  },
  {
    title: "Hotel & Flight Booking",
    description: "Seamless booking experiences with trusted global partners for comfort and convenience.",
    icon: "/about/icon-2.png", 
  },
  {
    title: "Guided Tours",
    description: "Expert-led tours that let you explore destinations deeply, safely, and stress-free.",
    icon: "/about/icon-3.png", 
  },
  {
    title: "Honeymoon Getaways",
    description: "Romantic escapes crafted to create unforgettable moments with your special someone.",
    icon: "/about/icon-4.png", 
  },
  {
    title: "Adventure Trips",
    description: "Thrilling outdoor journeys for explorers who crave excitement and new challenges.",
    icon: "/about/icon-5.png", 
  },
  {
    title: "International Destinations",
    description: "Discover handpicked locations across the globe, curated for every kind of traveler.",
    icon: "/about/icon-6.png", 
  },
];

const WhatWeOffer = () => {
  return (
    <section className="bg-[#FFF6EC] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What We Offer
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-20px md:max-w-5xl ">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon Container - Fixed Height for alignment */}
              <div className="mb-6 w-8 md:w-16 h-8 md:h-16 relative shrink-0">
                <Image
                  src={offer.icon}
                  alt={offer.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                {offer.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs leading-relaxed max-w-xs mx-auto">
                {offer.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;