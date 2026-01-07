"use client";

import { useState, FormEvent } from "react";
import { ChevronDown, Minus, Plus, Check, Download, } from "lucide-react";

// --- 1. Booking Confirmation popup/page/section ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookingSuccess = ({ data, onBack }: { data: any, onBack: () => void }) => {
  return (
    <section className="bg-white py-16 sm:py-24 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl px-4 sm:px-6">
        
        {/* Success Icon & Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg mb-6">
            <Check className="w-10 h-10 text-white stroke-3" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-3">
            Booking Confirmed!
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-md">
            Thank you for booking with Tripsiy.
          </p>
          <p className="text-gray-600 text-base sm:text-xs max-w-md">
            A confirmation email with all details has been sent to your inbox.
          </p>
        </div>

        {/* Booking Summary Card */}
        <div className="bg-white  overflow-hidden ">
          
          {/* Summary Header */}
          <div className="bg-[#FFF9F5] rounded-2xl shadow-sm px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl sm:text-[27px] font-regular tracking-wide text-gray-900">Booking Summary</h2>
            <button className="text-gray-500 hover:text-primary text-sm font-medium underline flex items-center gap-1 transition-colors">
              <Download className="w-4 h-4" /> Download Receipt
            </button>
          </div>

          {/* Details Grid */}
          <div className="p-6 sm:p-8 grid gap-y-6">
            
            <div className="grid grid-cols-2 gap-4 border-b border-gray-100 pb-4">
              <span className="text-[#2B2B2B] font-bold">Destination</span>
              <span className="text-[#2B2B2B] font-regular text-right sm:text-left">{data.destination}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 border-b border-gray-100 pb-4">
              <span className="text-[#2B2B2B] font-bold">Package Type</span>
              <span className="text-[#2B2B2B] font-regular text-right sm:text-left">{data.packageType}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 border-b border-gray-100 pb-4">
              <span className="text-[#2B2B2B] font-bold">Check-in Date</span>
              <span className="text-[#2B2B2B] font-regular text-right sm:text-left">{data.checkIn || "18 Nov 2025"}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 border-b border-gray-100 pb-4">
              <span className="text-[#2B2B2B] font-bold">Check-out Date</span>
              <span className="text-[#2B2B2B] font-regular text-right sm:text-left">{data.checkOut || "21 Nov 2025"}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 border-b border-gray-100 pb-4">
              <span className="text-[#2B2B2B] font-bold">Guests</span>
              <span className="text-[#2B2B2B] font-regular text-right sm:text-left">{data.guests} Adults</span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <span className="text-[#2B2B2B] font-bold text-lg">Total Amount</span>
              <span className="text-primary font-bold text-lg text-right sm:text-left">AED 999</span>
            </div>

          </div>
        </div>

        {/* Next Steps Section */}
        <div className="mt-12 text-center">
            <h3 className="text-xl md:text-3xl font-semibold tracking-wide text-gray-900 mb-6">
                Next Steps
            </h3>

            <ul className="flex flex-col gap-3 max-w-md mx-auto text-gray-600 mb-14">
                <li className="flex items-start font-medium gap-3 text-left">
                <Check className="w-5 h-5 text-[#008000] shrink-0 mt-0.5" />
                <span>Keep your confirmation email handy</span>
                </li>

                <li className="flex items-start font-medium gap-3 text-left">
                <Check className="w-5 h-5 text-[#008000] shrink-0 mt-0.5" />
                <span>Expect a WhatsApp update 12 hrs before pickup</span>
                </li>

                <li className="flex items-start font-medium gap-3 text-left">
                <Check className="w-5 h-5 text-[#008000] shrink-0 mt-0.5" />
                <span>You can modify or cancel within 24 hrs</span>
                </li>
            </ul>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-all shadow-md">
              View My Bookings
            </button>
            <button 
              onClick={onBack}
              className="bg-white text-gray-700 border border-primary/90 font-semibold px-8 py-3.5 rounded-lg hover:border-primary hover:text-primary transition-all"
            >
              Explore More Adventures
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- 2. Main Booking Form ---
const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // State to hold form data
  const [formData, setFormData] = useState({
    destination: "Dubai",
    packageType: "Luxury",
    guests: 1,
    checkIn: "",
    checkOut: "",
    fullName: "",
    email: ""
  });

  const handleGuestChange = (operation: "add" | "subtract") => {
    if (operation === "add") setFormData(prev => ({ ...prev, guests: prev.guests + 1 }));
    if (operation === "subtract" && formData.guests > 1) setFormData(prev => ({ ...prev, guests: prev.guests - 1 }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, yaha sai data send krenge
    setIsSubmitted(true);
    window.scrollTo(0, 0); 
  };

  //  If submitted, show Success Page
  if (isSubmitted) {
    return <BookingSuccess data={formData} onBack={() => setIsSubmitted(false)} />;
  }

  // Otherwise, show Form
  return (
    <section className="bg-white py-16 sm:py-24 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-2xl sm:text-[32px] font-semibold tracking-wide text-gray-900 mb-3">
            Start Your Booking
          </h1>
          <p className="text-gray-600 text-base sm:text-[18px] font-normal tracking-wide">
            Tell us your details and we will arrange the perfect travel experience.
          </p>
        </div>

        {/* Form Container (Card) */}
        <div className="bg-white rounded-4xl p-6 sm:p-10 lg:p-12 border border-[#d8d8d8] shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            
            {/* 1. Trip Details Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Trip Details</h2>
              
              <div className="flex flex-col gap-6">
                
                {/* Destination */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 font-regular tracking-wide">Destination <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select 
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3.5 appearance-none bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-700 cursor-pointer"
                    >
                      <option value="Dubai">Dubai</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Greece">Greece</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Row: Package Type & Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Package Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-regular tracking-wide">Package Type <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select 
                        name="packageType"
                        value={formData.packageType}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3.5 appearance-none bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-700 cursor-pointer"
                      >
                        <option value="Luxury">Luxury</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Family">Family</option>
                        <option value="Honeymoon">Honeymoon</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Number of Guests (Counter) */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-regular tracking-wide">Number of Guests</label>
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-13">
                      <button
                        type="button"
                        onClick={() => handleGuestChange("subtract")}
                        className="w-14 h-full flex items-center justify-center hover:bg-gray-50 text-gray-500 border-r border-gray-300 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <div className="flex-1 flex items-center justify-center text-gray-900 font-medium">
                        {formData.guests}
                      </div>
                      <button
                        type="button"
                        onClick={() => handleGuestChange("add")}
                        className="w-14 h-full flex items-center justify-center hover:bg-gray-50 text-gray-500 border-l border-gray-300 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* 2. Dates & Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
              
              {/* Left Side: Dates */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dates</h2>
                <div className="flex flex-col gap-6">
                  
                  {/* Check-in */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-regular tracking-wide">Check-in Date <span className="text-red-500">*</span></label>
                    <input
                      type="date"
                      name="checkIn"
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3.5 text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                    />
                  </div>

                  {/* Check-out */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-regular tracking-wide">Check-out Date <span className="text-red-500">*</span></label>
                    <input
                      type="date"
                      name="checkOut"
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3.5 text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                    />
                  </div>

                </div>
              </div>

              {/* Right Side: Personal Info */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Personal Info</h2>
                <div className="flex flex-col gap-6">
                  
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-regular tracking-wide">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. John Doe"
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-regular tracking-wide">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                    />
                  </div>

                </div>
              </div>

            </div>

            {/* 3. Submit Button */}
            <div className="pt-6 flex justify-center">
              <button
                type="submit"
                className="bg-primary text-white font-semibold text-lg px-12 py-4 rounded-lg hover:bg-primary/90 w-full sm:w-auto"
              >
                Confirm Booking
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;