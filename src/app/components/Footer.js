import React from 'react';
import { Link } from 'react-router-dom'
import { appPath, appName } from '../config/settings';

function Footer(props) {
  return (
    <footer className="container border-top py-4">
      <nav className="navbar navbar-expand navbar-light p-0">
        <ul className="navbar-nav my-2 my-md-0 mr-md-auto font-weight-bold">
          <li className="nav-item">
            <Link to={appPath + "/"} className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to={appPath + "/page/1"}  className="nav-link">Page1</Link>
          </li>
          <li className="nav-item">
            <Link to={appPath + "/page/2"}  className="nav-link">Page2</Link>
          </li>
          <li className="nav-item">
            <Link to={appPath + "/account"} className="nav-link">Account</Link>
          </li>
        </ul>
      </nav>
      <p className="text-muted pl-2"><small>© {appName}</small></p>
    </footer>
  );
}

export default Footer;