import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Logout } from "../../app/features/Auth/Auth";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const favourites = useSelector((state) => state.favourites.items);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">FASCO</div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "hover:text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/deals"
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "hover:text-black"
            }
          >
            Deals
          </NavLink>
          <NavLink
            to="/new-arrivals"
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "hover:text-black"
            }
          >
            New Arrivals
          </NavLink>
          <NavLink
            to="/packages"
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "hover:text-black"
            }
          >
            Packages
          </NavLink>
        </div>

        {/* Right Side (Fav + Auth) */}
        <div className="flex items-center">
          <Link to="/FavouritesItems" className="relative mx-4">
            {favourites.length > 0 ? (
              <FaHeart className="text-red-500 text-2xl" />
            ) : (
              <FaRegHeart className="text-gray-500 text-2xl" />
            )}
            {favourites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-white border-black border text-black text-xs px-2 py-0.5 rounded-full">
                {favourites.length}
              </span>
            )}
          </Link>
          <div className="relative mx-4">
            <Link to="/cart">
              {" "}
              <HiOutlineShoppingCart className="w-6 h-6 text-gray-700" />
            </Link>

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-white border border-black text-black text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          {user ? (
            <button
              onClick={() => dispatch(Logout())}
              className="px-5 py-2 bg-black text-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 bg-black text-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
