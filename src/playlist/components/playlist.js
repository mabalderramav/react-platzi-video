import React from 'react';
import Media from './media';
import './playlist.css';

/**
 * Handles PlayList component.
 * @param {props} props
 */
function PlayList(props) {
  return (<div className="Playlist">
    {
        props.playlist.map((item) => {
        return <Media {...item} key={item.id}/>
      })
    }
  </div>)
}

export default PlayList;
