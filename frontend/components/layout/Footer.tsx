import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full">
      
      {/* 1. (CTA) Section */}
      <div className="bg-[#F6B15C] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Ready for your next adventure?
          </h2>
          <p className="text-white/90 text-lg mb-8 font-light max-w-2xl mx-auto">
            Plan your dream trip with expert guidance and unbeatable deals.
          </p>
          <button className="bg-white text-[#2B2B2B] px-8 py-4 rounded-lg font-bold text-[16px] hover:bg-gray-50 transition-colors shadow-lg">
            Start Planning Now
          </button>
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="bg-linear-to-r from-[#F8E0B0] to-[#FFF8EF] pt-2 md:pt-16">
        
        {/* Top Section: Navigation & Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-12 lg:gap-8">
            
            {/* Column 1: Brand Info  */}
            <div className="flex flex-col items-start justify-center col-span-2 sm:col-span-1 lg:col-span-1">
              <Link href="/" className="mb-0">
                <Image
                  src="/logo.png" 
                  alt="Tripsiy Logo"
                  width={150}
                  height={50}
                  className="w-32 h-auto"
                />
              </Link>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Your trusted travel partner for unforgettable adventures.
              </p>
            </div>

            {/* Column 2: Quick Links    */}
            <div className="col-span-1">
              <h3 className="text-[#2B2B2B] font-bold text-sm md:text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {["Home", "About Us", "Destinations", "Packages", "Services", "Contact Us"].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-[#5A4B3C] hover:text-primary transition-colors text-sm sm:text-base"
                    >
                      {item === "Home" ? "Home" : item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Us     */}
            <div className="col-span-1">
              <h3 className="text-[#2B2B2B] font-bold text-sm md:text-lg mb-6">Contact Us</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-700 mt-1 shrink-0" />
                  <span className="text-gray-600 text-xs sm:text-base">Office 204, Downtown Dubai, UAE</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-700 shrink-0" />
                  <span className="text-gray-600 text-xs sm:text-base">+971 55 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-700 shrink-0" />
                  <span className="text-gray-600 text-xs sm:text-base">info@tripsiy.com</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Follow Us       */}
            <div className="col-span-2 sm:col-span-1 lg:col-span-1">
              <h3 className="text-[#2B2B2B] font-bold text-lg mb-6">Follow Us</h3>
              <div className="flex items-center gap-4">
                {[Facebook, Instagram, MessageCircle].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full border-2 border-[#E5B80B] flex items-center justify-center text-[#E5B80B] hover:bg-[#E5B80B] hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* hr line */}
        <div className="w-full border-t border-[#7A6A52]"></div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-[#7A6A52] text-sm">
            © 2025 Tripsiy. All rights reserved.
          </p>
        </div>
          
      </div>
    </footer>
  );
};

export default Footer;































// import Image from "next/image";

// import Link from "next/link";

// import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";



// const Footer = () => {

//   return (

//     <footer className="w-full">

     

//       {/* 1. Call to Action (CTA) Section */}

//       <div className="bg-[#F6B15C] py-16 px-4 sm:px-6 lg:px-8">

//         <div className="max-w-7xl mx-auto text-center">

//           <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">

//             Ready for your next adventure?

//           </h2>

//           <p className="text-white/90 text-lg mb-8 font-light max-w-2xl mx-auto">

//             Plan your dream trip with expert guidance and unbeatable deals.

//           </p>

//           <button className="bg-white text-[#2B2B2B] px-8 py-4 rounded-lg font-bold text-[16px] hover:bg-gray-50 transition-colors shadow-lg">

//             Start Planning Now

//           </button>

//         </div>

//       </div>



//       {/* 2. Main Footer Content */}

//       <div className="bg-linear-to-r from-[#F8E0B0] to-[#FFF8EF] pt-16">

       

//         {/* Top Section: Navigation & Info (Centered) */}

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

           

//             {/* Column 1: Brand Info */}

//             <div className="flex flex-col items-start justify-center">

//               <Link href="/" className="mb-0">

//                 <Image

//                   src="/logo.png"

//                   alt="Tripsiy Logo"

//                   width={150}

//                   height={50}

//                   className="w-32 h-auto"

//                 />

//               </Link>

//               <p className="text-gray-600 leading-relaxed text-sm sm:text-base">

//                 Your trusted travel partner for unforgettable adventures.

//               </p>

//             </div>



//             {/* Column 2: Quick Links */}

//             <div>

//               <h3 className="text-[#2B2B2B] font-bold text-lg mb-6">Quick Links</h3>

//               <ul className="space-y-4">

//                 {["Home", "About Us", "Destinations", "Packages", "Services", "Contact Us"].map((item) => (

//                   <li key={item}>

//                     <Link

//                       href={`/${item.toLowerCase().replace(" ", "-")}`}

//                       className="text-[#5A4B3C] hover:text-primary transition-colors text-sm sm:text-base"

//                     >

//                       {item === "Home" ? "Home" : item}

//                     </Link>

//                   </li>

//                 ))}

//               </ul>

//             </div>



//             {/* Column 3: Contact Us */}

//             <div>

//               <h3 className="text-[#2B2B2B] font-bold text-lg mb-6">Contact Us</h3>

//               <ul className="space-y-6">

//                 <li className="flex items-start gap-3">

//                   <MapPin className="w-5 h-5 text-gray-700 mt-1 shrink-0" />

//                   <span className="text-gray-600 text-sm sm:text-base">Office 204, Downtown Dubai, UAE</span>

//                 </li>

//                 <li className="flex items-center gap-3">

//                   <Phone className="w-5 h-5 text-gray-700 shrink-0" />

//                   <span className="text-gray-600 text-sm sm:text-base">+971 55 123 4567</span>

//                 </li>

//                 <li className="flex items-center gap-3">

//                   <Mail className="w-5 h-5 text-gray-700 shrink-0" />

//                   <span className="text-gray-600 text-sm sm:text-base">info@tripsiy.com</span>

//                 </li>

//               </ul>

//             </div>



//             {/* Column 4: Follow Us */}

//             <div>

//               <h3 className="text-[#2B2B2B] font-bold text-lg mb-6">Follow Us</h3>

//               <div className="flex items-center gap-4">

//                 {[Facebook, Instagram, MessageCircle].map((Icon, index) => (

//                   <a

//                     key={index}

//                     href="#"

//                     className="w-10 h-10 rounded-full border-2 border-[#E5B80B] flex items-center justify-center text-[#E5B80B] hover:bg-[#E5B80B] hover:text-white transition-all duration-300"

//                   >

//                     <Icon className="w-5 h-5" />

//                   </a>

//                 ))}

//               </div>

//             </div>



//           </div>

//         </div>



//        {/* hr line */}

//         <div className="w-full border-t border-[#7A6A52]"></div>



//         {/*  Copyright */}

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">

//           <p className="text-[#7A6A52] text-sm">

//             © 2025 Tripsiy. All rights reserved.

//           </p>

//         </div>

         

//       </div>

//     </footer>

//   );

// };



// export default Footer;