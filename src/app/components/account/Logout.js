import React from 'react';

// context for user state
import { UserContext } from '../../config/context';

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
      this.context.updateUser(false); // we can just remove the user from context
      // or we could redirect somewhere outside the app
      // window.location.href = window.location.protocol + "//" + window.location.host + "/";
    });
  }

  render() {
    return <Main loading={true} />;
  }
}

Logout.contextType = UserContext;

export default withHead(Logout, "Logging out...");