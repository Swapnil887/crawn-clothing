import {React,Fragment} from 'react'
import ProductCard from '../product-card/product-card.component'
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

// function Categorypreview({title,products}) {
//   return (
//     <div className='category-preview-container'>
      
//       <h2>
//         <span className='title'>
//           {title.toUpperCase()}
//         </span>
//       </h2>
//       <div className='preview'>
//         {products.filter((_,idx)=> idx<4)
//         .map((product)=><ProductCard product={product}/>)}
//       </div>
//     </div>
//   )
// }

// export default Categorypreview;



const Categorypreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to="title">{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default Categorypreview;