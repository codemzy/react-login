import React from 'react';
import { checkAuth } from '../../api/user';

// context for user state
import { UserContext } from '../../config/context';

// components
import Main from '../login/Main';

// checks with api if user is logged in and gets user data
const withAuthentication = (ComposedComponent) => { 
  return class Authentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        user: false,
        updateUser: (user) => { this.setState({ user: {...this.state.user, ...user} }) }
      };
    }
    
    componentDidMount() {
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
             <ComposedComponent {...this.props} />
           </UserContext.Provider>
         );
       }
    }

  } 
}

export default withAuthentication;