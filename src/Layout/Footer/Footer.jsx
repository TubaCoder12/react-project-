import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-6">
        {/* Logo / Brand Name */}
        <h2 className="text-xl font-semibold text-gray-800">FASCO</h2>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-6 mt-4 md:mt-0 text-sm text-gray-600">
          <li>
            <a href="#" className="hover:text-black">
              Support Center
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Invoicing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Contract
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              FAQs
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-500 pb-4">
        Copyright © 2022 zepo. All Rights Reserved.
      </div>
    </footer>
  );
}
