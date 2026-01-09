"use client";

import { Calendar, Calendar1, ChevronDown } from "lucide-react";

const BookTripForm = () => {
  return (
    <section className="bg-white rounded-lg py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Card Container */}
        <div className=" p-4 sm:p-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl tracking-wide font-medium text-gray-900">
              Book Your Trip Now
            </h2>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-14 px-6 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full h-14 px-6 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
              />
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full h-14 px-6 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
              />
            </div>

           {/* Date Picker - Uses Browser Native Icon */}
            <div>
              <input
                type="date"
                placeholder="Date Picker"
                className="w-full h-14 px-6 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white cursor-pointer"
              />
            </div>

            {/* Number of Travelers */}
            <div>
              <input
                type="number"
                placeholder="Number of Travelers"
                min="1"
                className="w-full h-14 px-6 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex flex-col items-center mt-4">
              <button
                type="submit"
                className="bg-primary text-white font-bold text-lg px-12 py-3.5 rounded-lg hover:bg-primary-hover transition-colors shadow-md w-full sm:w-auto"
              >
                Confirm Booking
              </button>
              <p className="text-gray-400 text-xs mt-4">
                Our team will contact you within 24 hours.
              </p>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
};

export default BookTripForm;