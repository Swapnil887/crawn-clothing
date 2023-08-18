import React from 'react';
import CategoryItem from '../category-item/category-item.component';
import { DirectoryContainer } from './directory.styles';

function Directory({Categories}) {
  return (<DirectoryContainer>
  {Categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ))}
</DirectoryContainer>)
}

export default Directory