import Image from "next/image";
import { ChevronDown} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-145 md:min-h-120 w-full">
      
      {/* Background Image */}
      <Image
        src="/destinations/hero.png"
        alt="Dubai"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full flex flex-col items-center">
          
          <h1 className="text-white font-bold tracking-wide text-3xl sm:text-4xl md:text-[40px] leading-tight mb-4 drop-shadow-md">
            Discover the Story Behind Tripsiy
          </h1>

          <p className="text-white font-regular tracking-[0.003em] text-sm sm:text-xl md:text-[16px] max-w-2xl mx-auto mb-10 sm:mb-14 drop-shadow-md">
            A UAE-based travel company turning dream vacations into real adventures.
          </p>

          {/* === Search/Filter Bar === */}
          <div className="w-full max-w-212.5 bg-black/50 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              
              {/* Region Dropdown */}
              <div className="relative flex-1 group">
                <select 
                  className="w-full h-12 sm:h-14 bg-[#71696196]/65 text-white pl-5 pr-10 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer hover:bg-[#4A4A4A] transition-colors text-sm sm:text-base tracking-wide"
                  defaultValue=""
                >
                  <option value="" disabled hidden>Region</option>
                  <option value="dubai" className="text-gray-900">Dubai</option>
                  <option value="europe" className="text-gray-900">Europe</option>
                  <option value="asia" className="text-gray-900">Asia</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5 pointer-events-none group-hover:text-primary transition-colors" />
              </div>

              {/* Travel Type Dropdown */}
              <div className="relative flex-1 group">
                <select 
                  className="w-full h-12 sm:h-14 bg-[#71696196]/65 text-white pl-5 pr-10 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer hover:bg-[#4A4A4A] transition-colors text-sm sm:text-base font-medium"
                  defaultValue=""
                >
                  <option value="" disabled hidden>Travel Type</option>
                  <option value="luxury" className="text-gray-900">Luxury</option>
                  <option value="adventure" className="text-gray-900">Adventure</option>
                  <option value="family" className="text-gray-900">Family</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5 pointer-events-none group-hover:text-primary transition-colors" />
              </div>

              {/* Search Button */}
              <button 
                type="button"
                className="w-full sm:w-auto h-12 sm:h-14 tracking-wide px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-2"
              >
                Search
              </button>
              
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;