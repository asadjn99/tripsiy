import Image from "next/image";
// import Link from "next/link";

const categories = [
  { 
    id: 1, 
    title: "Adventure Trips", 
    icon: "/destinations/exp-1.png",
  },
  { 
    id: 2, 
    title: "Luxury Escapes", 
    icon: "/destinations/exp-2.png", 
  },
  { 
    id: 3, 
    title: "Family Vacations", 
    icon: "/destinations/exp-3.png", 
  },
  { 
    id: 4, 
    title: "Honeymoon Specials", 
    icon: "/destinations/exp-4.png", 
  },
  { 
    id: 5, 
    title: "Nature Retreats", 
    icon: "/destinations/exp-5.png", 
  },
  { 
    id: 6, 
    title: "Cultural Tours", 
    icon: "/destinations/exp-6.png", 
  },
];

const ExploreCategories = () => {
  return (
    <section className="bg-[#FFF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide text-gray-900">
            Explore by Category
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 sm:gap-y-16 justify-items-center">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="flex flex-col items-center group cursor-pointer"
            >
              
              {/* Circular Gradient Background */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-linear-to-b from-[#FFD166] to-[#FFE4B5] flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                {/* Responsive Icon */}
                <div className="relative w-10 h-10 sm:w-14 sm:h-14">
                  <Image
                    src={cat.icon}
                    alt={cat.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 40px, 56px"
                  />
                </div>
              </div>

              {/* Category Title */}
              <h3 className="mt-4 sm:mt-6 text-sm sm:text-lg font-medium text-gray-800 tracking-wide text-center group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExploreCategories;