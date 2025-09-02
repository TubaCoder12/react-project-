import React from "react";
import img1 from "../../assets/Images/img1.svg"; // left image
import img2 from "../../assets/Images/img2.svg"; // top group image
import img3 from "../../assets/Images/img3.svg"; // right image
import img4 from "../../assets/Images/img4.svg"; // bottom image
import sale from "../../assets/Images/sale.svg"; // bottom image
const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Image */}
      <div className="flex items-center justify-center bg-[#E0E0E0] rounded-xl p-4">
        <img src={img1} alt="Left" className="object-contain w-full h-full" />
      </div>

      {/* Center Content */}
      <div className="flex flex-col justify-center items-center space-y-6">
        {/* Top Image */}
        <div className="bg-[#E0E0E0] rounded-xl p-4">
          <img src={img2} alt="Top Group" className="object-contain" />
        </div>

        {/* Text Content */}
        <div className="text-center py-20">
          <h1 className="text-[76px] font-bold">ULTIMATE</h1>
          <img src={sale} alt="" />
          <p className="mt-2 text-gray-600 tracking-wide">NEW COLLECTION</p>
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition">
            SHOP NOW
          </button>
        </div>

        {/* Bottom Image */}
        <div className=" rounded-xl ">
          <img src={img4} alt="Bottom" className="object-contain" />
        </div>
      </div>

      {/* Right Image */}
      <div className="flex items-center justify-center bg-[#E0E0E0]  rounded-xl p-4">
        <img src={img3} alt="Right" className="object-contain w-full h-full" />
      </div>
    </section>
  );
};

export default Hero;
