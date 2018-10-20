import React from 'react';
import PlayList from '../../playlist/components/playlist';
import './category.css';

/**
 * This class handles Category component.
 */
function Category(props) {
  return (<div className="Category">
    <p className="Category-description">{props.description}</p>
    <h2 className="Category-title">{props.title}</h2>
    <PlayList playlist={props.playlist}/>
  </div>)
}

/**
 * Export class.
 */
export default Category;
