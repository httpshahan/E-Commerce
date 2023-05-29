import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  const [ isActive, setIsActive ] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemCount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })
  
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all duration-300`}
    >

      {/* logo  */}
      <div className="flex container mx-auto justify-between items-center h-full">
        <Link to={'/'}>
          <img src={Logo} alt="logo" className="w-[40px]" />
        </Link>


        {/* cart icon */}
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
