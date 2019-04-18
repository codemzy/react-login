import React from 'react';

// hoc
import withHead from '../hocHead';

//components
import Main from '../Main';

function Page(props) {
  return (
    <Main>
        <h1>{props.title}</h1>
        <p className="lead">This is a dummy page for the app.</p>
    </Main>
  );
}

export default withHead(Page);