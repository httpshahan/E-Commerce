import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../contexts/CartContext";



const Product = ({ product }) => {
  const {addToCart} = useContext(CartContext)
  
  const { id, image, title, price, category } = product;
  return (
    <div className="container">
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* images */}
          <div className="w-[200px] mx-auto flex justify-center items-cener">
            <img
              src={image}
              alt={title}
              className="max-h-[160px] group-hover:scale-110 transition transform duration-500 ease-in-out"
            />
          </div>
          {/* button */}
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-cener justify-center opacity-0 gap-y-2 group-hover:opacity-100 tansition-all duration-300">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <AiOutlinePlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="flex justify-center items-center text-white w-12 h-12 bg-red-500"
            >
              <AiFillEye className="text-3xl" />{" "}
            </Link>
          </div>
        </div>
      </div>
      {/* category && title && price*/}
      <div>
        <div className="">
          <h3 className="text-sm text-gray-500 capitalize mb-1">{category}</h3>
          <Link to={`/product/${id}`} className="hover:text-red-500 transition">
            <h2 className="text-lg font-semibold mb-1">{title}</h2>
          </Link>
          <h3 className="font-semibold">${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
