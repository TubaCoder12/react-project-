import React from "react";
import UseProduct from "../../Hooks/UseProduct";
import Loader from "../Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourite,
  removeFromFavourite,
} from "../../app/features/Favourite/favourite";
import { addToCart } from "../../app/features/CartSlice/cartSlice";
import { errorToast, sucessToast } from "../../Helper/Messages";

const NewArrivals = () => {
  const favourites = useSelector((state) => state.favourites.items);

  const cart = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isPending, isError, data, error } = UseProduct();

  const toggleFavourite = (product) => {
    const isFav = favourites.some((item) => item.id === product.id);
    if (isFav) {
      dispatch(removeFromFavourite(product.id));
      errorToast("Delete from Favourite");
    } else {
      dispatch(addToFavourite(product));
      sucessToast("Add In Favourite ");
    }
  };

  if (isPending) return <Loader />;
  if (isError) {
    return (
      <h3 className="text-red-500 text-center py-10">
        {error.message || "Failed to load products"}
      </h3>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">New Arrivals</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis sollicitudin aliquam sem.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((product) => {
          const isFav = favourites.some((item) => item.id === product.id); // ✅ correct check

          return (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition relative"
            >
              {/* Favourite button */}
              <button
                onClick={() => toggleFavourite(product)} // ✅ pass whole product
                className="absolute top-3 right-3  text-xl bg-gray-400 rounded-full p-2"
              >
                {isFav ? (
                  <FaHeart className=" text-red-500" />
                ) : (
                  <FaRegHeart className="text-black" />
                )}
              </button>

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain rounded-xl"
              />
              <Link
                to={`/product/${product.id}`}
                className="mt-4 text-lg font-semibold"
              >
                {product.title}
              </Link>
              <p className="text-sm text-gray-500">{product.category}</p>

              {/* Ratings */}
              <div className="flex items-center text-yellow-500 mt-2">
                <span className="ml-2 text-gray-600 text-sm">
                  ({product.rating.count}) Customer Reviews
                </span>
              </div>

              {/* Price + Status */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">${product.price}</span>
                <button
                  onClick={() => {
                    dispatch(addToCart(product)); // dispatch first
                    sucessToast("Added to cart!"); // then show toast
                  }}
                  className="text-sm text-white bg-black rounded-md p-3"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="px-8 py-3 bg-black text-white rounded-lg shadow-md hover:shadow-lg transition">
          View More
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
