import React, {useContext} from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";

const CartItem = ({ items }) => {

  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  const { id, title, price, image, amount } = items;
  return (
    <div className="flex items-center justify-between py-6 border-b">
      <div className="flex items-center gap-4">
        <div className="w-[80px] h-[80px] flex justify-center items-center">
          <img src={image} alt={title} className="max-w-[80px]" />
        </div>
        <div>
          <Link to={`/product/:${id}`}>
          {title}
          </Link>
          {/* <h3 className="text-sm font-medium">{title}</h3> */}
          
          <h3 className="text-sm font-medium">${price}</h3>
          
          <div className="flex items-center gap-2 mt-2">
          <button onClick={()=> decreaseAmount(id)} className="w-6 h-6 flex justify-center items-center border border-[#e4e4e4]">
            <FiMinus />
          </button>
          <h3 className="text-sm font-semibold">{amount}</h3>
          <div onClick={()=> increaseAmount(id)} className="w-6 h-6 flex justify-center items-center border border-[#e4e4e4] cursor-pointer">
            <FiPlus/>
          </div>
          <h3 className="text-sm font-semibold">${parseFloat(amount*price).toFixed(2)}</h3>
        </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div onClick={()=> removeFromCart(id)} className="w-8 h-8 flex justify-center items-center cursor-pointer hover:text-red-500 transition">
          <FiTrash2 className="text-xl" />
        </div>
      </div>
    </div>

  );
};

export default CartItem;
