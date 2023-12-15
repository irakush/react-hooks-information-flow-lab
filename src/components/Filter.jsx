import React from 'react'

function Filter({ onCategoryChange, selectedCategory, items }) {

  // const handleCategoryChange = (event) => onCategoryChange(event.target.value)

  return (
    <div className="Filter">
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  )
}

export default Filter;