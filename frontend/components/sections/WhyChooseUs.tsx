import Image from "next/image";
import { Globe, Handshake, Wallet, Clock } from "lucide-react";

// data
const features = [
  {
    title: "Wide Destinations",
    description: "Explore beautiful places across the world with Tripsiy.",
    icon: Globe,
  },
  {
    title: "Trusted Service",
    description: "Enjoy safe, smooth, and reliable travel experiences.",
    icon: Handshake,
  },
  {
    title: "Best Price Guarantee",
    description: "Get the best deals and value for every trip.",
    icon: Wallet,
  },
  {
    title: "24/7 Assistance",
    description: "We're here to help you anytime, anywhere.",
    icon: Clock,
  },
];

const WhyChooseUs = () => {
  return (
    // Using the light off-white background to contrast with the previous white section
    <section className="bg-[#FFF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-3 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl tracking-wide sm:text-4xl font-semibold text-gray-900">
            Why Choose Tripsiy
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Large Image */}
          <div className="relative h-80 md:h-90 lg:h-150  lg:w-130 rounded-3xl overflow-hidden flex items-center">
            <Image
              src="/why/left.png" 
              alt="Travelers hiking"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column: Features List */}
          <div className="flex flex-col gap-6 sm:gap-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center lg:items-start  gap-6">
                {/* Icon Circle */}
                <div className="shrink-0 w-8 md:w-12 lg:w-20 h-8 md:h-12 lg:h-20 rounded-full bg-[#E5B80B]/80 flex items-center justify-center shadow-md text-white">

                  <feature.icon className="w-5  md:w-7 lg:w-10 h-5  md:h-7 lg:h-10" strokeWidth={2} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col pt-2">
                  <h3 className="text-md md:text-2xl font-semibold text-gray-900 mb-0 md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-normal  md:leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;