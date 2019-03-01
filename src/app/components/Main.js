import React from 'react';

function Main(props) {
  return (
    <div className="min-vh-100 d-flex flex-column">
      {props.children}
    </div>
  );
}

export default Main;