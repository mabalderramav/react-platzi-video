import React from 'react';
import Category from './category';
import './categories.css';

/**
 * This class handles Categories component.
 */
function Categories(props) {
  return (<div className="Categories">
    {
      props.categories.map((item) => {
        return <Category key={item.id} {...item}/>
      })
    }
  </div>)
}

/**
 * Export class.
 */
export default Categories;
