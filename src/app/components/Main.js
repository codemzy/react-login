import React from 'react';

// components
import Nav from './Nav';

function Main(props) {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Nav />
      {props.children}
    </div>
  );
}

export default Main;