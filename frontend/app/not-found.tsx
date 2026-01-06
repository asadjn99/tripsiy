import Link from "next/link";
import { MapPinOff, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-12 mt-10">
      
      {/* 1.  Icon */}
      <div className="relative mb-8">
        
        <Compass className="w-40 h-40 text-gray-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-50" />
        
        {/* Main iocn */}
        <MapPinOff className="w-24 h-24 text-primary relative z-10 animate-bounce" />
      </div>

      {/* 2. Error Message */}
      <h1 className="text-8xl font-bold text-gray-900 mb-2 font-serif">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
        Off the Map!
      </h2>
      
      <p className="text-gray-600 max-w-md mb-10 text-lg leading-relaxed">
        Oops! It looks like this destination hasn not been discovered yet. 
        You might have taken a wrong turn on your journey.
      </p>

      {/* 3. Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg hover:scale-105"
        >
          Return to Home Base
        </Link>
        
        <Link
          href="/contact"
          className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-3.5 rounded-full font-bold hover:border-primary hover:text-primary transition-all"
        >
          Contact Support
        </Link>
      </div>

    </div>
  );
}