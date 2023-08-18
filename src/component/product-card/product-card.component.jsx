import {
    ProductCartContainer,
    Footer,
    Name,
    Price,
  } from './product-cart.styles.jsx';
  
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';



// const ProductCard = ({ product }) => {
//   const { name, price, imageUrl } = product;
//   const { addItemToCart } = useContext(CartContext);
// console.log("name",name)
//   const addProductToCart = ()=>addItemToCart(product)
//   return (
//     <div className='product-card-container'>
//       <img src={imageUrl} alt={`${name}`} />
//       <div className='footer'>
//         <span className='name'>{name}</span>
//         <span className='price'>{price}</span>
//       </div>
//       <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
//     </div>
//   );
// };

// export default ProductCard;

const ProductCard = ({product}) =>{
  const {name,imageUrl,price} = product;
  const {addItemToCart} = useContext(CartContext)

  const handleAddToCart = () => addItemToCart(product)

  return (
      <ProductCartContainer>
          <img src={imageUrl} alt={name}/>
          <Footer>
              <Name>{name}</Name>
              <Price>{price}</Price>
          </Footer>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddToCart}>Add To Cart</Button>
      </ProductCartContainer>
  )
}

export default ProductCard