import React from 'react';
import ReactDOM from 'react-dom';

//components
import LoginForm from './login/components/LoginForm';


function App(props) {
  return (
    <div className="min-vh-100 bg-dark d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="card shadow my-4">
              <div className="card-body">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));