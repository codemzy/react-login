import React from 'react';

// api calls
import { checkAuth } from '../api/user';

// components
import Main from '../components/login/Main';

// user context
const UserContext = React.createContext({
  user: false,
  updateUser: () => {},
});

// user context provider
export const UserProvider = class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: false,
      updateUser: (user) => { this.setState({ user: user }) }
    };
  }

  componentDidMount() {
    // checks auth on load
    checkAuth.then((result) => {
        this.setState({user: result, loading: false});
    }).catch(() => {
        this.setState({loading: false});
    })
  }

  render() {
     if(this.state.loading) {
         return <Main loading={true} />;
     } else {
       return (
         <UserContext.Provider value={{ user: this.state.user, updateUser: this.state.updateUser }}>
           {this.props.children}
         </UserContext.Provider>
       );
     }
  }

};

// user context consumer
export const UserConsumer = UserContext.Consumer;

// user context
export default UserContext;