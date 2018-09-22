import React from 'react';

/**
 * This class handles Media component.
 */
function Icon(props) {
  const {color, size} = props;
  return (<svg fill={color} height={size} width={size} viewBox="0 0 32 32">
    {props.children}
  </svg>)
}

/**
 * Export class.
 */
export default Icon;
