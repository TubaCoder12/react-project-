import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseSingleProduct from "../../Hooks/UseSingleProduct";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../app/features/CartSlice/cartSlice";
import { sucessToast } from "../../Helper/Messages";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = UseSingleProduct(id);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // ✅ local quantity state
  const [quantity, setQuantity] = useState(1);

  // ✅ sync with store if item already in cart
  useEffect(() => {
    const cartItem = cart.find((item) => item.id === data?.id);
    if (cartItem) setQuantity(cartItem.quantity);
  }, [cart, data]);

  if (isLoading) return <Loader />;
  if (isError) return <h1 className="text-red-500">{error.message}</h1>;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...data, quantity }));
    sucessToast("Added to cart!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
      {/* Left: Product Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={data.image}
          alt={data.title}
          className="w-80 h-80 object-contain rounded-xl shadow-md"
        />
      </div>

      {/* Right: Product Details */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-gray-600">Category: {data.category}</p>
        <p className="text-lg font-semibold">Price: ${data.price}</p>
        <p className="text-gray-700">{data.description}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={() => {
              setQuantity((prev) => {
                const newQty = Math.max(prev - 1, 1);
                dispatch(decreaseQuantity(data.id)); // store update
                return newQty;
              });
            }}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            -
          </button>

          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-40 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
