import React from 'react';
import { Link } from 'react-router-dom'
import { appName } from '../config/settings';
import * as paths from '../router/paths';

function Footer(props) {
  return (
    <footer className="container border-top py-4 mt-4">
      <nav className="navbar navbar-expand navbar-light p-0 d-flex flex-wrap">
        <ul className="navbar-nav my-2 my-md-0 mr-auto font-weight-bold">
          <li className="nav-item">
            <Link to={paths.home} className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to={paths.page + "/1"}  className="nav-link">Page1</Link>
          </li>
          <li className="nav-item">
            <Link to={paths.page + "/2"}  className="nav-link">Page2</Link>
          </li>
        </ul>
        <ul className="navbar-nav my-2 my-md-0 font-weight-bold">
          <li className="nav-item">
            <Link to={paths.account} className="nav-link">Settings</Link>
          </li>
          <li className="nav-item">
            <Link to={paths.logOut} className="nav-link">Log Out</Link>
          </li>
        </ul>
      </nav>
      <p className="text-muted pl-2"><small>© {appName}</small></p>
    </footer>
  );
}

export default Footer;