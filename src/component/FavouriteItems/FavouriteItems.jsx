import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearFavourites,
  removeFromFavourite,
} from "../../app/features/Favourite/favourite";
import { FaHeart } from "react-icons/fa";

const FavouritesItems = () => {
  const favourites = useSelector((state) => state.favourites.items);
  const dispatch = useDispatch();

  if (favourites.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">No Favourite Products Yet ❤️</h2>
        <p className="text-gray-600">Start adding some to your favourites!</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center mb-8">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <FaHeart className="text-red-500" /> My Favourites
        </h2>

        <button
          onClick={() => dispatch(clearFavourites())}
          className="ml-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Clear All Favourites
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {favourites.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition relative"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain rounded-xl"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold">${product.price}</span>
              <button
                onClick={() => dispatch(removeFromFavourite(product.id))}
                className="text-sm bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavouritesItems;
