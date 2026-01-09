import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-145 md:min-h-120 w-full">
      
      {/* Background Image */}
      <Image
        src="/packages/hero.png"
        alt="Boat in the sea and mountains"
        fill
        className="object-cover object-center"
        priority
      />

        {/* Dark Overlay on img*/}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          
          
          <h1 className="text-white font-bold tracking-wide text-3xl sm:text-4xl md:text-[40px] leading-tight mb-4">
            Find Your Perfect Travel Package
          </h1>

          <p className="text-[#EAEAEA] font-semibold tracking-[0.003em] text-sm sm:text-xl md:text-[20px] max-w-4xl mx-auto">
          Curated trips for every traveler — choose your style and start exploring.
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;