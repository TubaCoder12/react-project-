import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../../app/features/CartSlice/cartSlice";
import { errorToast } from "../../Helper/Messages";
import { Link } from "react-router-dom";

const SelectedCart = () => {
  const cart = useSelector((state) => state.cart.items);
  const shipping = useSelector((state) => state.cart.shippingCharges);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">No Products in Cart ❤️</h2>
        <p className="text-gray-600">Start adding some items to your cart!</p>
      </div>
    );
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const productsTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalPrice = productsTotal + shipping;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <FaHeart className="text-red-500" /> My Cart
        </h2>

        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Clear All Cart
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full sm:w-20 h-20 object-contain rounded-xl mb-4 sm:mb-0 sm:mr-6"
              />

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => dispatch(decreaseQuantity(product.id))}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span className="px-2">{product.quantity}</span>
                    <button
                      onClick={() => dispatch(increaseQuantity(product.id))}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(removeFromCart(product.id));
                      errorToast("Removed item!");
                    }}
                    className="text-sm bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-1/3  bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 h-fit">
          <h3 className="text-2xl font-bold mb-4">Order Summary</h3>

          <div className="flex justify-between text-gray-700">
            <span>Total Items:</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between text-gray-700">
            <span>Products Total:</span>
            <span>${productsTotal.toFixed(2)}</span> {/* only products price */}
          </div>

          <div className="flex justify-between text-gray-700">
            <span>Shipping:</span>
            <span>${shipping}</span>
          </div>

          <div className="flex justify-between text-lg font-bold">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span> {/* subtotal + shipping */}
          </div>

          <Link
            to="/checkout"
            className="mt-4 w-full bg-black text-white py-3 text-center rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedCart;
