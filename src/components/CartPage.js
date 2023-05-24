import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const CartPage = ({ items }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { id, title, price, image, amount } = items;

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="mb-2 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
          {/* product - start */}
          <div className="py-5 sm:py-8">
            <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div className="w-[200px] mx-auto flex justify-center items-center">
                <Link to={`/product/${id}`}>
                  <img
                    src={image}
                    loading="lazy"
                    alt={title}
                    className="max-h-[180px] object-center transition duration-200 group-hover:scale-110"
                  />
                </Link>
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <Link
                    to={`/product/${id}`}
                    className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    {title}
                  </Link>
                  <span className="block text-gray-500">Size: S</span>
                  <span className="block text-gray-500">Color: White</span>
                </div>
                <div>
                  <span className="mb-1 block font-bold text-gray-800 md:text-lg">
                    ${price}
                  </span>
                </div>
              </div>
              <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-12 w-20 overflow-hidden rounded border">
                    <div className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring">
                      {amount}
                    </div>
                    <div className="flex flex-col divide-y border-l">
                      <button
                        onClick={() => increaseAmount(id)}
                        className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                      >
                        +
                      </button>
                      <button
                        onClick={() => decreaseAmount(id)}
                        className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(id)}
                    className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Delete
                  </button>
                </div>
                <div className="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
                  <span className="block font-bold text-gray-800 md:text-lg">
                    ${parseFloat(amount*price).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* product - end */}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
