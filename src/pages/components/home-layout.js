import React from 'react';
import './home-layout.css';

/**
 * This class handles HomeLayout component.
 */
function HomeLayout(props) {
  return(
    <section className="HomeLayout">
      {props.children}
    </section>
  )
}

/**
 * Export class.
 */
export default HomeLayout;
