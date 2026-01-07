import Image from "next/image";

const features = [
  {
    title: "Trusted Expertise",
    description: "Backed by years of travel expertise, we take pride in curating flawless itineraries that bring your dream destinations to life.",
    icon: "/about/icon-11.png", 
  },
  {
    title: "Affordable Luxury",
    description: "Experience the comfort of premium travel without breaking the bank — we bring you the best stays, flights, and experiences at the most reasonable prices.",
    icon: "/about/icon-22.png", 
  },
  {
    title: "Seamless Experience",
    description: "From planning to booking and beyond, we take care of every detail so you can relax, explore, and enjoy your trip without a single worry.",
    icon: "/about/icon-33.png", 
  },
];

const WhyChooseUsFeatures = () => {
  return (
    <section className="bg-[#FAFAFA] py-10 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-2 sm:p-4"
            >
              {/* Icon Container */}
              {/* Sized to be visible but compact enough to fit 3 cards on mobile view */}
              <div className="mb-4 w-14 h-14 sm:w-16 sm:h-16 relative shrink-0">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsFeatures;