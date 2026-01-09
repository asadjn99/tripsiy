"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import BookTripForm from "@/../components/sections/booking/BookTripForm";

//  Data
const packageData = {
  id: "dubai-luxury",
  title: "Dubai Luxury Tour",
  rating: 4.5,
  reviews: 120,
  duration: "8 Days 7 Nights",
  description: "Desert safari, Burj Khalifa Tickets, Dubai Mall Experience, Dhow Cruise, Global Village Dubai",
  price: "7,000",
  currency: "AED",
  itinerary: [
    { day: "Day 1", title: "Arrival in Dubai, city highlights", desc: "Transfer to hotel, evening Marina Dhow Cruise with dinner." },
    { day: "Day 2", title: "Desert safari, camel rides, BBQ dinner", desc: "Afternoon pickup for dune bashing, sunset views, and entertainment." },
    { day: "Day 3-4", title: "Atlantis, aquarium, Dhow cruise, Dubai Fountain", desc: "Visit Palm Jumeirah, Aquaventure Waterpark, and evening fountain show." },
    { day: "Day 5", title: "Palm Jumeirah, Jumeirah Beach", desc: "Relaxing beach day and tour of the iconic Palm island." },
    { day: "Day 6-7", title: "Dubai Frame, Al Fahidi, shopping, Global Village", desc: "Cultural tours, souvenir shopping, and world entertainment." },
    { day: "Day 8", title: "Leisure morning, departure", desc: "Breakfast at hotel, free time for last minute shopping, transfer to airport." },
  ],
  inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
  exclusions: ["Flights", "Personal Expenses", "Tips"],
  gallery: [
    "/packages/pkg/g-1.png",
    "/packages/pkg/g-2.png",
    "/packages/pkg/g-3.png",
    "/packages/pkg/g-4.png",
    "/packages/pkg/g-5.png",
  ]
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function PackageDetailsPage({ params }: { params: { id: string } }) {
  // RealApp ke params.id data fetch dapara ba use kw
  const pkg = packageData; 

  return (
    <main className="bg-[#FAFAFA] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= BREADCRUMB ================= */}
        <nav className="flex items-center text-sm text-gray-500 mb-8 overflow-hidden whitespace-nowrap">
          <Link href="/" className="hover:text-[#F6B15C] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 shrink-0 text-gray-400" />
          <Link href="/packages" className="hover:text-[#F6B15C] transition-colors">
            Packages
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 shrink-0 text-gray-400" />
          <span className="text-gray-900 font-medium truncate">
            {pkg.title}
          </span>
        </nav>

        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          
          {/* Left: Title & Info */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {pkg.title}
            </h1>
            
            {/* Ratings & Duration */}
            <div className="flex flex-wrap  items-center  gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1 w-full">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(pkg.rating) ? "fill-[#F6B15C] text-[#F6B15C]" : "text-gray-300"}`} 
                  />
                ))}
                <span className="ml-1 font-medium">({pkg.rating})</span>
              </div>
              <div className="flex items-center gap-1.5"> 
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{pkg.duration}</span>
              </div>
            </div>

            <p className="text-gray-600 text-[14px] tracking-wide max-w-2xl leading-relaxed">
              {pkg.description}
            </p>
          </div>


          {/* Price & CTA */}
          <div className="flex flex-col items-start lg:items-end gap-4  p-6 rounded-2xl w-full lg:w-auto">
            <div className="text-left lg:text-right">
            
              <p className="text-gray-900 text-sm font-medium">
                  <span className="text-gray-500 text-sm mb-1">From </span>
                <span className="text-[#F6B15C]"> {pkg.currency} {pkg.price}</span>
                <span className="text-sm font-normal text-gray-500">/person</span>
              </p>
            </div>
            <Link 
              href="/booking"
              className="bg-[#F6B15C] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#e5a04d] transition-colors shadow-md w-full lg:w-auto text-center"
            >
              Book This Package
            </Link>
          </div>
        </div>

        {/* ================= ITINERARY SECTION ================= */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium tracking-wide text-gray-900 mb-8">Itinerary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pkg.itinerary.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">{item.day}</h3>
                <p className="text-gray-600 mb-1 tracking-wide">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= INCLUSIONS / EXCLUSIONS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Inclusions */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Inclusions</h2>
            <ul className="space-y-4">
              {pkg.inclusions.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-[#008000]" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Exclusions</h2>
            <ul className="space-y-4">
              {pkg.exclusions.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ================= GALLERY SECTION ================= */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Gallery</h2>
          
          <div className="relative group max-w-8xl">
            {/* Scrollable Container */}
            <div className="flex gap-3 overflow-x-auto pb-6 scrollbar-hide snap-x">
              {pkg.gallery.map((img, idx) => (
                <div key={idx} className="relative h-56 w-56 sm:w-58 shrink-0 rounded-lg overflow-hidden ">
                  <Image
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Hint Arrows */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hidden md:group-hover:block cursor-pointer backdrop-blur-sm">
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hidden md:group-hover:block cursor-pointer backdrop-blur-sm">
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </div>
          </div>
        </div>

        {/* 2. THE BOOKING FORM */}
        <div className="mt-20">
            <BookTripForm />
        </div>

      </div>
    </main>
  );
}