import Image from "next/image";
import Link from "next/link"; 

// Data matching your image (5 items)
const offers = [
  {
    title: "Flight Bookings",
    description: "Find the best flight deals to destinations around the world. We handle bookings, re-scheduling, and exclusive offers.",
    icon: "/services/icon-1.png", 
  },
  {
    title: "Hotel Reservations",
    description: "Choose from handpicked hotels and resorts that fit your style and budget. We ensure comfort, safety, and convenience wherever you go.",
    icon: "/services/icon-2.png", 
  },
  {
    title: "Visa Assistance",
    description: "We simplify the visa process by guiding you through documents, requirements, and applications — hassle-free travel guaranteed.",
    icon: "/services/icon-3.png", 
  },
  {
    title: "Custom Travel Plans",
    description: "Get personalized itineraries designed around your interests — adventure, luxury, or relaxation.",
    icon: "/services/icon-4.png", 
  },
  {
    title: "Airport Transfers",
    description: "Reliable pickups and drop-offs so you start and end your trip stress-free. From solo travelers to groups, we’ve got you covered.",
    icon: "/services/icon-5.png", 
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#FFF8F3] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What We Offer
          </h2>
        </div>

        {/* LAYOUT UPDATES: */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 w-full mx-auto">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 w-full sm:w-[48%] lg:w-[30%]"
            >
              {/* Icon Container */}
              <div className="mb-6 w-12 md:w-16 h-12 md:h-16 relative shrink-0">
                <Image
                  src={offer.icon}
                  alt={offer.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                {offer.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto mb-8 grow">
                {offer.description}
              </p>

              {/* Button */}
              <Link
                href="/contact"
                className="bg-primary text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-md w-full max-w-60"
              >
                Contact Us for Service
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;