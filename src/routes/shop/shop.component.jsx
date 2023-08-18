import {Route,Routes } from "react-router-dom";
import Categories from "../categories-preview/categories-preview.component";
import Category from "../category/category.compnent";

const Shop = () => {
  
  return (
    <Routes>
      <Route index element={<Categories/>}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
  );

  
};

export default Shop;
