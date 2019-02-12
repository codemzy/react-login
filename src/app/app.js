import React from 'react';
import ReactDOM from 'react-dom';

//components
import LoginForm from './login/components/LoginForm';


function App(props) {
  return (
    <div className="min-vh-100 bg-dark d-flex flex-column justify-content-center align-items-center">
      <div className="card shadow">
        <div className="card-body">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));