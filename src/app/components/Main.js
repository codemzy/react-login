import React from 'react';

// components
import Nav from './Nav';
import Footer from './Footer';
import Alert from './Alert';

function Main(props) {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Nav />
      <div className="flex-grow-1">
        <div className="container">
          <Alert />
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;