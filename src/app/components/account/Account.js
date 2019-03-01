import React from 'react';

// hoc
import withHead from '../hocHead';

//components
import Main from '../Main';

function Account(props) {
  return (
    <Main>
      <div className="container">
        <h1>My Account</h1>
        <p className="lead">This is your account page, that will show details about your account if you are logged in.</p>
      </div>
    </Main>
  );
}

export default withHead(Account, "My Account");