import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import CartPage from "../components/CartPage";

const Cart = () => {
  const { cart, clearCart, total, itemCount } = useContext(CartContext);

  return (
    <div className="container p-10">
        <div className="mb-6 sm:mb-10 lg:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Your Cart
          </h2>
        </div>
      <div>
        {cart.map((item) => {
          return <CartPage key={item.id} items={item} />;
        })}
      </div>

      {/* <!-- totals - start --> */}
      <div class="flex flex-col items-end gap-4">
            <div class="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
              <div class="space-y-1">
                <div class="flex justify-between gap-4 text-gray-500">
                  <span>Subtotal</span>
                  <span>{ parseFloat(total).toFixed(2)}</span>
                </div>

                <div class="flex justify-between gap-4 text-gray-500">
                  <span>Shipping</span>
                  <span>$4.99</span>
                </div>
              </div>

              <div class="mt-4 border-t pt-4">
                <div class="flex items-start justify-between gap-4 text-gray-800">
                  <span class="text-lg font-bold">Total</span>

                  <span class="flex flex-col items-end">
                    <span class="text-lg font-bold">${ parseFloat(total + 4.99).toFixed(2)} USD</span>
                    <span class="text-sm text-gray-500">including VAT</span>
                  </span>
                </div>
              </div>
            </div>

            <button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Check out
            </button>
          </div>
          {/* <!-- totals - end --> */}
    </div>
  );
};

export default Cart;
