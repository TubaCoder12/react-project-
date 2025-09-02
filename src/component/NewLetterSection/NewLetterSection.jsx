import React from "react";
import img1 from "../../assets/Images/Subscribe1.svg";
import img2 from "../../assets/Images/Subscribe2.svg";

export default function NewsletterSection() {
  return (
    <div className="relative w-full bg-white min-h-screen flex items-center justify-center">
      {/* Left Image */}
      <img
        src={img1}
        alt="Left Model"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-[600px] object-contain"
      />

      {/* Right Image */}
      <img
        src={img2}
        alt="Right Model"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-[500px] object-contain"
      />

      {/* Newsletter Box */}
      <div className="relative z-10 max-w-xl mx-auto text-center px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultricies sollicitudin aliquam sem. Scelerisque duis ultricies
          sollicitudin.
        </p>

        {/* Input and Button */}
        <div className="mt-6 flex items-center bg-white shadow-md rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="michael@ymail.com"
            className="flex-1 px-4 py-3 text-gray-700 outline-none"
          />
          <button className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-900">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}
