import React from 'react';

// hoc
import withHead from '../hocHead';

//components
import Main from '../Main';

function Dashboard(props) {
  return (
    <Main>
      <div className="text-center">
        <h1 className="display-3">Dashboard</h1>
        <p className="lead">This is a dashboard that only a logged in user can see.</p>
      </div>
    </Main>
  );
}

export default withHead(Dashboard, "Dashboard");