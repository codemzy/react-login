import React from 'react';

// hoc
import withHead from '../hocHead';

//components
import Main from '../Main';
import Email from './Email';

function Account(props) {
  return (
    <Main>
        <h1>My Account</h1>
        <p className="lead">This is your account page, that will show details about your account if you are logged in. You can change your email, but remember, this is just a demo and doesn't save your details.</p>
        <Email />
    </Main>
  );
}

export default withHead(Account, "My Account");