import React from 'react';

// hoc
import withHead from '../hocHead';

//components
import Main from '../Main';

function Dashboard(props) {
  return (
    <Main>
      <h1>Dashboard</h1>
    </Main>
  );
}

export default withHead(Dashboard, "Dashboard");