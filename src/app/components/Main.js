import React from 'react';

// components
import Nav from './Nav';
import Footer from './Footer';

function Main(props) {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Nav />
      <div className="flex-grow-1">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Main;