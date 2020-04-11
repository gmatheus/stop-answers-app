import React from 'react'
import './CategoryText.css'

const CategoryText = ({ name, emoji }) => 
  <React.Fragment>
    <span role="img" aria-label={emoji} className="category-emoji">
      {emoji}
    </span>
    {name}
  </React.Fragment>

export default CategoryText
