import { createContext, useEffect, useState } from 'react';
import {getCollectionAndDocuments} from '../utils/firebase/firebase.utils';
import SHOP_DATA from "../shop-data3.js"
// import Products from "../shop-data.json"

export const ProductsContext = createContext({
  products: {},
});

console.log(SHOP_DATA,"pperer")
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  console.log("PPP",products)
  
  useEffect(()=>{
   async function getData(){
    var data = await getCollectionAndDocuments('categories')
    setProducts(data)

  }
  
  getData()
  },[])

  
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};