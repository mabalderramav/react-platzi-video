import React from 'react';
import logo from '../../../images/logo.png';
import './related.css';

/**
 * This class handles Related component.
 */
function Related(props) {
  return (
    <div className="Related">
      <img src={logo} width={250}/>
    </div>
  )
}

/**
 * Export class.
 */
export default Related;
