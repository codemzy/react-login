import React from 'react';
import { Link } from 'react-router-dom'
import { appPath } from '../config/settings';

function Nav(props) {
  return (
    <nav className="navbar navbar-expand navbar-light p-3 px-md-4 mb-3 border-bottom bg-white">
        <div className="d-flex flex-column flex-md-row align-items-center container">
            <Link to={appPath + "/"} className="navbar-brand my-0 mr-md-3 font-weight-bold">My App</Link>
            <div className="navbar-nav my-2 my-md-0 mr-md-auto font-weight-bold">
                <Link to={appPath + "/page/1"}  className="nav-item nav-link">Page1</Link>
                <Link to={appPath + "/page/2"}  className="nav-item nav-link">Page2</Link>
            </div>
            <div className="navbar-nav my-2 my-md-0 font-weight-bold">
                <Link to={appPath + "/account"}  className="nav-item nav-link">Account</Link>
            </div>
        </div>
    </nav>
  );
}

export default Nav;