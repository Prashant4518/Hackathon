import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../store/cartslice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="p-6 text-center  text-2xl font-semibold text-gray-500">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-700 mt-20">
      <h1 className="text-4xl font-bold mb-6">Your Cart</h1>

      <ul className="space-y-6">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex bg-gradient-to-b  from-yellow-100 to-red-100 flex-col sm:flex-row justify-between items-center border-b pb-4"
          >
            <div className="text-left">
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <img
                src={item.img}
                alt=""
                className="w-24 h-24 object-cover rounded-md shadow"
              />
              <p className="text-lg text-gray-600">
                Price: ₹ {item.price.toFixed(2)}
              </p>
            </div>

            <div className="flex items-center gap-4 mt-3 sm:mt-0">
              <button
                onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                className="px-3 py-1 bg-gray-300 rounded text-xl font-bold"
              >
                −
              </button>
              <span className="text-xl">{item.quantity}</span>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="px-3 py-1 bg-gray-300 rounded text-xl font-bold"
              >
                +
              </button>
              <button
                onClick={() => dispatch(removeFromCart({ id: item.id }))}
                className="ml-3 text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-2xl font-semibold text-right">
        Total: ₹ {total.toFixed(2)}
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
