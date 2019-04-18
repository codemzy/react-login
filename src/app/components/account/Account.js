import React from 'react';
import { Link } from 'react-router-dom'
import { appPath } from '../../config/settings';

// hoc
import withHead from '../hocHead';

//components
import Main from '../Main';
import Email from './Email';

function Account(props) {
  return (
    <Main>
      <div className="container">
        <h1>My Account</h1>
        <p className="lead">This is your account page, that will show details about your account if you are logged in.</p>
        <Details />
        <Email />
        <Link to={appPath + "/logout"} className="btn btn-danger mt-5">Log Out</Link>
      </div>
    </Main>
  );
}

export default withHead(Account, "My Account");