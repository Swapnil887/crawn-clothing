import { useContext } from "react";
import Categorypreview from "../../component/category-preview/category-preview.component";
import ProductCard from "../../component/product-card/product-card.component";
import { ProductsContext } from "../../context/products.context";


const Categories = () => {
  const { products } = useContext(ProductsContext);
  console.log("swapnil", products);
  return (
    <div >
      {Object.keys(products).map((title) => {
        const data = products[title];
        return <Categorypreview key={title} title={title} products={data} />
      })}
    </div>
  );

  
};

export default Categories;