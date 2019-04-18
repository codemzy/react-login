import React from 'react';

// components
import Loading from '../Loading';
import Alert from '../Alert';

function Main(props) {
  return (
    <div className="min-vh-100 bg-dark d-flex flex-column justify-content-center align-items-center">
      { props.loading ?
        <Loading />
        :
        <div className="container">
          <div className="row">
            <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 py-5">
              <h1 className="text-white">{props.title}</h1>
              <div className="card shadow my-4">
                <div className="card-body p-5">
                    <Alert />
                    {props.children}
                </div>
              </div>
              {props.footer}
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Main;