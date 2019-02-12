import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
  return (
    <div className="min-vh-100 bg-dark d-flex flex-column justify-content-center align-items-center">
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));