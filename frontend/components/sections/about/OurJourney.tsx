import Image from "next/image";

const OurJourney = () => {
  return (
    // Section background
    <section className="bg-[#FFFCF8] py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12">
          
          {/* Left Column: Image */}
          <div className="w-full md:w-full md:h-99 lg:w-122 aspect-650/864 lg:h-151 relative rounded-3xl overflow-hidden shrink-0">
            <Image
              src="/about/journey.png"
              alt="Team planning a trip with a map"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 550px"
            />
          </div>

          {/* Right Column */}
          <div className="flex order-1 flex-col justify-center lg:max-w-157.75">
            
            {/* Heading */}
            <h2 className="text-gray-900 font-semibold text-3xl sm:text-[30px] tracking-[0.003rem] mb-8 text-center">
              Our Journey
            </h2>
            
            {/* Main Txt */}
            <p className="text-gray-700 font-medium text-sm sm:text-xl lg:text-[24px] tracking-[0.003em] leading-relaxed mb-4 text-center lg:text-left">
              Founded in Dubai, Tripsiy was born from a simple idea — to make travel planning effortless, exciting, and reliable. From local adventures to international escapes, our team ensures that every trip is crafted with care and authenticity.
            </p>
            
            {/* bottom txt */}
            <p className="text-[#F6B15C] italic font-medium text-sm sm:text-xl lg:text-[24px] tracking-[0.003em] leading-relaxed text-center lg:text-left">
              We believe travel isn’t just about places — it’s about people, memories, and stories.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OurJourney;