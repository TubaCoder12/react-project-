import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  // Agar /login route hai to Navbar/Footer hide kar do
  const hideLayout = location.pathname === "/login";

  return (
    <div className="flex flex-col min-h-screen bg-stone-100">
      {/* Navbar (sirf login ke ilawa dikhana hai) */}
      {!hideLayout && <Navbar />}

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer (sirf login ke ilawa dikhana hai) */}
      {!hideLayout && <Footer />}
    </div>
  );
};

export default Layout;
