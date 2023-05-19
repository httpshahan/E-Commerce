import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemCount } = useContext(CartContext);
  return (
    <header className="bg-pink-200">
      <div className="flex container mx-auto justify-between items-center h-full">
        <div>
          <img src={Logo} alt="logo" className="w-[40px]" />
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div>
            <span className="absolute -right-2 bg-red-500 text-white w-5 h-5 flex justify-center items-center text-xs rounded-full">
              {itemCount}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
