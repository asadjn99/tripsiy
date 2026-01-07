import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative h-[70vh] min-h-145 md:min-h-120 w-full">
      
      {/* Background Image */}
      <Image
        src="/about/hero.png"
        alt="Camels in desert sunset"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Overlay agar acha laga tu */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          
          
          <h1 className="text-white font-bold tracking-wide text-3xl sm:text-4xl md:text-[40px] leading-tight mb-4">
            Discover the Story Behind Tripsiy
          </h1>

         
          <p className="text-[#F9E7C0] font-semibold tracking-[0.003em] text-sm sm:text-xl md:text-[20px] max-w-4xl mx-auto">
            A UAE-based travel company turning dream vacations into real adventures.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;