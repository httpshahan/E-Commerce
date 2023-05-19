import React, { createContext, useState } from 'react';


export const CartContext = createContext();

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const [itemCount, setItemCount] = useState(0);
  
  const addToCart = (product, id) => {
   const newItem = {...product, amount: 1};
  
   const existingItem = cart.find((item) => item.id === id);
   if(existingItem){
      const newCart = [...cart].map((item) => {
        if(item.id === id){
          return {...item, amount: existingItem.amount + 1};
        }else{
          return item;
        }
      });
      setCart(newCart);
   }else{
      setCart([...cart, newItem]);
   }
  };

  const removeFromCart = (id) => {
    const newCart = [...cart].filter((item) => item.id !== id);
    setCart(newCart);
  }

  const clearCart = () => {
    setCart([]);
  }

  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
    
  }
  
  const decreaseAmount = (id) => {
    const existingItem = cart.find((item) => item.id === id);
    if(existingItem.amount === 1){
      removeFromCart(id);
    }else{
      const newCart = [...cart].map((item) => {
        if(item.id === id){
          return {...item, amount: existingItem.amount - 1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    }
  }
  return <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemCount}}>{children}</CartContext.Provider>;
};

export default CartProvider;
