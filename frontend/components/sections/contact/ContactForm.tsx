"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl tracking-wide sm:text-4xl font-bold text-gray-900 mb-3">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg tracking-wide">
            Get in touch with us easily.
          </p>
        </div>

        {/* Two Column Layout (Form & Info) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20">
          
          {/* LEFT COLUMN: Contact Form */}
          <div className="w-full">
            <form className="flex flex-col gap-6">
              
              {/* Name Field */}
              <div className="flex flex-col gap-0">
                <label htmlFor="name" className="text-gray-700 font-medium text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-700 font-medium text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-700 font-medium text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-primary text-white font-medium text-lg px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-colors shadow-md w-full sm:w-auto"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>

          {/* RIGHT COLUMN: Info & Hours */}
          <div className="flex flex-col gap-12 lg:pt-2">
            
            {/* Contact Info Section */}
            <div>
              <h3 className="text-2xl font-normal text-gray-800 mb-8">Contact Info</h3>
              <ul className="flex flex-col gap-6">
                
                {/* Address */}
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg">
                    Office 204, Downtown Dubai, UAE
                  </span>
                </li>

                {/* Phone */}
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-gray-600 text-lg">
                    +971 55 123 4567
                  </span>
                </li>

                {/* Email */}
                <li className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-gray-600 text-lg">
                    info@tripsiy.com
                  </span>
                </li>
              </ul>
            </div>

            {/* Business Hours Section */}
            <div>
              <h3 className="text-2xl font-normal text-gray-800 mb-8">Business Hours</h3>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div className="flex flex-col text-gray-600 text-lg">
                  <span>Monday – Friday:</span>
                  <span>9:00am – 6:00pm</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* NEW SECTION: Google Map */}
        <div className="max-w-7xl h-50 sm:h-100 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178510024333!2d55.27175837605417!3d25.197202731771974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1708451234567!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tripsiy Dubai Office Location"
              className="grayscale-20% hover:grayscale-0 transition-all duration-500"
            />
        </div>

      </div>
    </section>
  );
};

export default ContactForm;