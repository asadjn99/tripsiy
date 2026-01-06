import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-150 flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/bg.png"
          alt="Travel background"
          fill
          priority
          className="object-fill"
        />
        {/* Dark Overlay for readability  */}
        <div className="absolute inset-0 bg-black/40 -z-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
          Discover the World with Tripsiy
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto drop-shadow">
          Your trusted travel partner for unforgettable experiences.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/packages"
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-all shadow-lg w-full sm:w-auto"
          >
            Explore Packages
          </Link>
          <Link
            href="/plan"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all shadow-lg w-full sm:w-auto"
          >
            Plan Your Trip
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;