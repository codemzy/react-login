import React from 'react';
import { checkAuth } from '../../api/user';
import { UserContext } from '../../config/context';

// checks with api if user is logged in and gets user data
const withAuthentication = (ComposedComponent) => { 
  return class Authentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        user: false
      };
    }
    
    componentDidMount() {
      checkAuth.then(() => {
        this.setState({user: false, loading: false});
      }).catch(() => {
        this.setState({loading: false});
      })
    } 
    
    render() { 
       if(this.state.loading) {
           return <div>Loading...</div>;
       } else {
         return (
           <UserContext.Provider value={this.state.user}>
             <ComposedComponent {...this.props} />
           </UserContext.Provider>
         );
       }
    }

  } 
}

export default withAuthentication;