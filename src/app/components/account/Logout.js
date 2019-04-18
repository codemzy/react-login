
import React from 'react';

// context
import { getContext } from '../../context';

// api calls
import { userLogout } from '../../api/user';

// hoc
import withHead from '../hocHead';

//components
import Main from '../login/Main';

class Logout extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    userLogout().finally(() => {
      // we can just remove the user from context
      this.props.userContext.updateUser(false); // we can just remove the user from context to get redirected to log in
      // or we could redirect somewhere outside the app
      // window.location.href = window.location.protocol + "//" + window.location.host + "/";
    });
  }

  render() {
    return <Main loading={true} />;
  }
}

export default getContext({
  user: true
})(withHead(Logout, "Logging out..."));