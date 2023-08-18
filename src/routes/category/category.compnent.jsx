import React, { useEffect, useState,Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { CategoryContainer, Title } from './category.styles';
import ProductCard from '../../component/product-card/product-card.component';
import { ProductsContext } from '../../context/products.context';
function Category() {
    const category=useParams();
    
    const { products } = useContext(ProductsContext);
    // console.log(,products)
    const [items,setitems] = useState(products[category.category])
    
    console.log("hakuna matata",items,category)
    useEffect(()=>{
        setitems(products[category.category])
    },[category,products])



    return(
        <Fragment>
            <Title>{category.category.toUpperCase()}</Title>
      <CategoryContainer>
        {items &&
          items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
        </Fragment>
    )
}

export default Category