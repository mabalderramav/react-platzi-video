import React from 'react';
import PlayList from '../../playlist/components/playlist';

/**
 * This class handles Category component.
 */
function Category(props) {
  return (<div>
    <p>{props.description}</p>
    <h1>{props.title}</h1>
    <PlayList playlist={props.playlist}/>
  </div>)
}

/**
 * Export class.
 */
export default Category;
