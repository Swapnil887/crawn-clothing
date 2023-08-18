import { createContext, useEffect, useState } from "react";

const addTOCart = (cartItems, productTOAdd) => {
  const isItemExists = cartItems.find(
    (product) => product.id == productTOAdd.id
  );

  if (isItemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id == productTOAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productTOAdd, quantity: 1 }];
};


const removeItem = (cartItems,productTORemove)=>{
  const isItemExists = cartItems.find(
    (product) => product.id === productTORemove.id
  );

  if (isItemExists.quantity===1) {
    return cartItems.filter((cartItem) => cartItem.id !== productTORemove.id);
 
  }

  if (isItemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === productTORemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  
}

const deleteCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addCartItem: () => {},
  removeCartItem:()=>{},
  clearCartItem:()=>{},
  cartCount: 0,
  cartTotal:0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    var value = cartItems.reduce((acc, ele) => {
      return acc + ele.quantity;
    }, 0);
    
    setCartCount(value);
    
  }, [cartItems]);

  useEffect(() => {
    var total = cartItems.reduce((acc, ele) => {
      return acc + ele.quantity * ele.price;
    }, 0);
    
    setCartTotal(total);
    
  }, [cartItems]);

  const removeCartItemFromCart = (product)=>{
    
    setCartItems(removeItem(cartItems,product))
  }

  const deleteCartItemFromCart = (product)=>{
    
    setCartItems(deleteCartItem(cartItems,product))
  }

  const addItemToCart = (product) => {
    setCartItems(addTOCart(cartItems, product));
  };

  const value = {cartTotal, isCartOpen, setIsCartOpen,removeCartItemFromCart,deleteCartItemFromCart, addItemToCart, cartItems ,cartCount};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
