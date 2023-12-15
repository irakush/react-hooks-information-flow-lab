import React, { useState } from "react";
import Item from "./Item";
import Filter from './Filter'

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const onCategoryChange = (event) => setSelectedCategory(event.target.value)

  if (selectedCategory != "All") {
    items = items.filter((item) => {
      return item.category === selectedCategory
    })
  }

  return (
    <div className="ShoppingList">
     <Filter onCategoryChange={onCategoryChange} selectedCategory={selectedCategory} items={items}/>
      <ul className="Items">
      {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;