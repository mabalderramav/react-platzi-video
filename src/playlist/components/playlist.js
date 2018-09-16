import React from 'react';
import Media from './media';
import './playlist.css';

/**
 * Handles PlayList component.
 * @param {props} props
 */
function PlayList(props) {
  const categories = props.data.categories;

  console.log(props.data);
  return (<div>
    {
      categories.map((category) => {
        return (<div key={category.id} className="Playlist">
          <h2>{category.title}</h2>
          <p>{category.description}</p>
          {
            category.playlist.map((item) => {
              return <Media {...item} key={item.id}/>
            })
          }
        </div>)
      })
    }
  </div>)
}
export default PlayList;
