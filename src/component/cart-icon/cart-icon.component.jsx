import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../context/cart.context';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
 const {cartCount} = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
console.log(cartCount)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;