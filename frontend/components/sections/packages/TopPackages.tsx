"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Star } from "lucide-react";

// Mock Data
const packages = [
  {
    id: 1,
    title: "Nepal",
    subtitle: "Conquer the Himalayas",
    days: "9 Days",
    price: "AED 3,700",
    rating: 5,
    image: "/packages/top-1.png",
    category: "Adventure",
  },
  {
    id: 2,
    title: "Costa Rica",
    subtitle: "Wild Rainforests & Volcano Thrills",
    days: "6 Days",
    price: "AED 4,400",
    rating: 5,
    image: "/packages/top-2.png",
    category: "Adventure",
  },
  {
    id: 3,
    title: "Dubai",
    subtitle: "Desert & Thrill Adventure",
    days: "8 Days",
    price: "AED 5,200",
    rating: 5,
    image: "/packages/top-3.png",
    category: "Luxury",
  },
  {
    id: 4,
    title: "Bali",
    subtitle: "Tropical Adventure Awaits",
    days: "7 Days",
    price: "AED 3,900",
    rating: 5,
    image: "/packages/top-4.png",
    category: "Family",
  },
];

const categories = ["Luxury", "Adventure", "Family", "Honeymoon"];

const TopPackages = () => {
  const [activeCategory, setActiveCategory] = useState("Adventure");

  return (
    <>
      {/* =========================================
          1. Filter Bar Section
      ========================================= */}
      <div className="w-full bg-dark py-4 shadow-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-0">
            
            {/* LEFT: Category Buttons */}
            <div className="flex flex-wrap justify-center bg-dark-card rounded-lg">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-12 md:px-6 lg:px-4 py-3 rounded-md font-semibold tracking-wide transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#F6B15C] text-black font-semibold shadow-sm" // Active
                      : "text-gray-300 hover:text-white hover:bg-white/5" // Inactive
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* RIGHT: Dropdowns */}
            <div className="flex flex-col-2 sm:flex-row  gap-4 md:gap-12  w-auto">
              
              {/* Region Dropdown */}
              <div className="relative w-full sm:w-44 group ">
                <select
                  className="w-full appearance-none bg-dark-card text-gray-200 font-medium tracking-wide pl-4 pr-10 py-3 rounded-lg border border-transparent focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer text-sm"
                  defaultValue=""
                >
                  <option value="" disabled hidden>Region</option>
                  <option value="dubai">Dubai</option>
                  <option value="europe">Europe</option>
                  <option value="asia">Asia</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-primary transition-colors" />
              </div>

              {/* Price Range Dropdown */}
              <div className="relative w-full sm:w-44 group">
                <select
                  className="w-full appearance-none bg-dark-card text-gray-200 font-medium tracking-wide pl-4 pr-10 py-3 rounded-lg border border-transparent focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer text-sm"
                  defaultValue=""
                >
                  <option value="" disabled hidden>Price Range</option>
                  <option value="low">Under AED 3k</option>
                  <option value="mid">AED 3k - 6k</option>
                  <option value="high">Above AED 6k</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4  pointer-events-none text-primary transition-colors" />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          2. Main Packages Section
      ========================================= */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-2">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Top Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-2 flex flex-col grow">
                  <h3 className="text-lg font-semibold text-gray-900 ">{pkg.title}</h3>
                  <p className="text-xs text-gray-500 mb-4 tracking-wide">{pkg.subtitle}</p>

                  <div className="flex items-center justify-between mb-3 text-sm">
                    <span className="text-gray-500 tracking-wide">{pkg.days}</span>
                    <span className="text-gray-500">
                      From <span className="text-[#E8B958] tracking-wide font-regular text-base">{pkg.price}</span>
                    </span>
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(pkg.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFCC00] opacity-50 text-primary" />
                    ))}
                  </div>

                  <div className="mt-auto text-center">
                    <Link
                      href={`/packages/${pkg.id}`}
                      className="inline-block bg-primary tracking-wide text-white text-sm font-semibold py-2 px-6 rounded-lg hover:bg-primary-hover transition-colors shadow-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default TopPackages;