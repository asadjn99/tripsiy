// "use client";

// import { useState, useEffect } from "react";
// import { Quote } from "lucide-react";

// // 1. Data Setup
// const testimonials = [
//   {
//     id: 1,
//     text: "Tripsiy made our Dubai trip unforgettable. Everything from hotels to tours was perfectly arranged!",
//     name: "Aisha Khan",
//     location: "Pakistan",
//     flag: "🇵🇰",
//   },
//   {
//     id: 2,
//     text: "I was amazed by the seamless booking process. The team took care of every single detail for us.",
//     name: "Asad Ullah",
//     location: "Pakistan",
//     flag: "🇵🇰",
//   },
//   {
//     id: 3,
//     text: "An absolute delight! The packages are affordable, and the customer service is top-notch.",
//     name: "Syed Hamza Shah",
//     location: "Pakistan",
//     flag: "🇵🇰",
//   },
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // 2. Auto-Slide Logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 3000); 

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     // Alternating background: Use white to contrast with the previous cream section
//     <section className="bg-white py-16 sm:py-24 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
//             What Our Travelers Say
//           </h2>
//         </div>

//         {/* Carousel Container */}
//         <div className="max-w-4xl mx-auto text-center relative">
          
//           {/* Large Background Quote Icon */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 sm:-translate-y-16 -z-10 opacity-10">
//             <Quote className="w-32 h-32 sm:w-48 sm:h-48 text-gray-400 fill-gray-400" />
//           </div>

//           {/* Sliding Content */}
//           <div className="min-h-50 flex flex-col justify-center items-center">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={testimonial.id}
//                 className={`transition-all duration-700 ease-in-out absolute inset-0 flex flex-col items-center justify-center ${
//                   index === currentIndex
//                     ? "opacity-100 translate-x-0 scale-100"
//                     : "opacity-0 translate-x-8 scale-95 pointer-events-none"
//                 }`}
//               >
//                 {/* Testimonial Text */}
//                 <p className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-700 leading-relaxed italic mb-8 px-4">
//                   `{testimonial.text}`
//                 </p>

//                 {/* Author & Location */}
//                 <div className="flex items-center gap-2 text-base sm:text-lg font-medium">
//                   <span className="text-primary">— {testimonial.name},</span>
//                   <span className="text-primary opacity-80">{testimonial.location}</span>
//                   <span className="text-xl">{testimonial.flag}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Dots Navigation */}
//           <div className="flex justify-center gap-3 mt-12">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex
//                     ? "w-3 bg-primary"
//                     : "w-3 bg-gray-300 hover:bg-primary/50"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;









"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Imported Image component

// 1. Data Setup
const testimonials = [
  {
    id: 1,
    text: "Tripsiy made our Dubai trip unforgettable. Everything from hotels to tours was perfectly arranged!",
    name: "Aisha Khan",
    location: "Pakistan",
    flag: "🇵🇰",
  },
  {
    id: 2,
    text: "I was amazed by the seamless booking process. The team took care of every single detail for us.",
    name: "Asad Ullah",
    location: "Pakistan",
    flag: "🇵🇰",
  },
  {
    id: 3,
    text: "An absolute delight! The packages are affordable, and the customer service is top-notch.",
    name: "Syed Hamza Shah",
    location: "Pakistan",
    flag: "🇵🇰",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. Auto-Slide Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl tracking-wide sm:text-4xl font-semibold text-gray-900">
            What Our Travelers Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto text-center relative">
          
          
          <div className="absolute top-4 left-4 sm:left-0 -z-10 opacity-100">
            <Image 
              src="/quote.png" 
              alt="Quote mark"
              width={160} 
              height={160}
              className="w-24 h-24 sm:w-40 sm:h-40 object-contain"
            />
          </div>

          {/* Sliding Content */}
          <div className="min-h-30 md:min-h-50 flex flex-col justify-center items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ease-in-out absolute inset-0 flex flex-col items-center justify-center ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-0 translate-x-8 scale-95 pointer-events-none"
                }`}
              >
                {/* Testimonial Text */}
                <p className="text-lg m-0 sm:text-xl md:text-2xl tracking-wide font-serif text-gray-700 leading-relaxed italic mb-8 px-4">
                  `{testimonial.text}`
                </p>

                {/* Author & Location */}
                <div className="flex items-center gap-2 text-base sm:text-lg font-medium">
                  <span className="text-primary text-[14px] md:text-[22px]">— {testimonial.name},</span>
                  <span className="text-primary opacity-80 text-[14px] md:text-[22px]">{testimonial.location}</span>
                  <span className="text-[14px] md:text-[22px]">{testimonial.flag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-20 md:mt-24">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-3 bg-primary" 
                    : "w-3 bg-gray-300 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;