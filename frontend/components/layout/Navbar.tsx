// "use client";

// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Search, Menu, X } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about" },
//   { name: "Destinations", href: "/destinations" },
//   { name: "Packages", href: "/packages" },
//   { name: "Services", href: "/services" },
//   { name: "Contact Us", href: "/contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const searchRef = useRef<HTMLDivElement>(null);

//   // Close desktop search if clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
//         setIsSearchOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20 relative">
          
//           {/* Logo */}
//           <div className="shrink-0 flex items-center z-10">
//             <Link href="/">
//               <Image
//                 src="/logo.png"
//                 alt="Tripsiy Logo"
//                 width={150}
//                 height={50}
//                 className="w-auto h-16 sm:h-20"
//                 priority
//               />
//             </Link>
//           </div>

//           {/* DESKTOP Nav Links (Smart Hide on Search) */}
//           <div 
//             className={`hidden lg:flex items-center space-x-5 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
//               isSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"
//             }`}
//           >
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={`text-sm xl:text-base font-medium whitespace-nowrap transition-colors duration-200 ${
//                   link.name === "Home"
//                     ? "text-primary"
//                     : "text-gray-700 hover:text-primary"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* DESKTOP Right Side: Search & Button */}
//           <div className="hidden lg:flex items-center gap-3 z-10 bg-white pl-2">
            
//             {/* Search Container */}
//             <div ref={searchRef} className="relative flex items-center justify-end">
//               <div
//                 className={`flex items-center overflow-hidden transition-all duration-300 ease-in-out ${
                 
//                   isSearchOpen ? "w-75 xl:w-64 opacity-100 mr-2" : "w-0 opacity-0"
//                 }`}
//               >
//                 <input
//                   type="text"
//                   placeholder="Search destinations..."
//                   className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary text-gray-700 placeholder-gray-400 shadow-sm"
//                   autoFocus={isSearchOpen}
//                 />
//               </div>

//               <button
//                 onClick={() => setIsSearchOpen(!isSearchOpen)}
//                 className={`p-2 mr-4 rounded-full transition-colors duration-200 shrink-0 ${
//                   isSearchOpen ? "text-primary bg-primary/10" : "text-gray-600 hover:text-primary"
//                 }`}
//               >
//                 {isSearchOpen ? (
//                   <X className="w-5 h-5" />
//                 ) : (
//                   <Search className="w-6 h-6" />
//                 )}
//               </button>
//             </div>

//             <Link
//               href="/booking"
//               className="bg-primary text-white px-5 xl:px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-all shadow-md transform hover:scale-105 whitespace-nowrap text-sm xl:text-base"
//             >
//               Book Now
//             </Link>
//           </div>

//           {/* MOBILE Menu Button (Visible on md and smaller) */}
//           <div className="lg:hidden flex items-center z-10">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-primary focus:outline-none p-2"
//             >
//               {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE Menu Dropdown */}
//       <div
//         className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen ? "max-h-screen opacity-100 shadow-xl" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-4 pt-4 pb-6 space-y-4">
//           <div className="flex flex-col space-y-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`px-4 py-2 rounded-lg text-sm md:text-lg font-medium transition-colors ${
//                   link.name === "Home"
//                     ? "bg-primary/5 text-primary"
//                     : "text-gray-700 hover:bg-gray-50 hover:text-primary"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Actions Section */}
//           <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col gap-4">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full h-11.5 border border-gray-300 rounded-full px-5 text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-400"
//               />
//               <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
//                 <Search className="w-5 h-5" />
//               </div>
//             </div>

//             <Link
//               href="/booking"
//               onClick={() => setIsOpen(false)}
//               className="w-full h-11.5 flex items-center justify-center bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-md text-lg"
//             >
//               Book Now
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






















"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Destinations", href: "/destinations" },
  { name: "Packages", href: "/packages" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close desktop search if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          
          {/* Logo */}
          <div className="shrink-0 flex items-center z-10">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Tripsiy Logo"
                width={150}
                height={50}
                className="w-auto h-16 sm:h-20"
                priority
              />
            </Link>
          </div>

          {/* DESKTOP Nav Links */}
          {/* Note: Removed the opacity-hide logic since search no longer conflicts with space */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm xl:text-base font-medium whitespace-nowrap transition-colors duration-200 ${
                  link.name === "Home"
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* DESKTOP Right Side: Search & Button */}
          <div className="hidden lg:flex items-center gap-4 z-10 bg-white pl-2">
            
            {/* Search Container (Relative Parent) */}
            <div ref={searchRef} className="relative flex items-center justify-end">
              
              {/* Search Toggle Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-full transition-colors duration-200 shrink-0 ${
                  isSearchOpen ? "text-primary bg-primary/10" : "text-gray-600 hover:text-primary"
                }`}
              >
                {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-6 h-6" />}
              </button>

              {/* FLOATING Search Field (The Dropdown) */}
              <div
                className={`absolute top-full right-0 mt-4 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 transition-all duration-200 origin-top-right transform ${
                  isSearchOpen 
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Search destinations..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-700 placeholder-gray-400 bg-gray-50"
                    autoFocus={isSearchOpen}
                    />
                    <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
              </div>

            </div>

            <Link
              href="/booking"
              className="bg-primary text-white px-5 xl:px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-all shadow-md transform hover:scale-105 whitespace-nowrap text-sm xl:text-base"
            >
              Book Now
            </Link>
          </div>

          {/* MOBILE Menu Button */}
          <div className="lg:hidden flex items-center z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE Menu Dropdown */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 shadow-xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm md:text-lg font-medium transition-colors ${
                  link.name === "Home"
                    ? "bg-primary/5 text-primary"
                    : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Actions Section */}
          <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col gap-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-11.5 border border-gray-300 rounded-lg px-5 text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-400"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="w-5 h-5" />
              </div>
            </div>

            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="w-full h-11.5 flex items-center justify-center rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-md text-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;