import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkAuth } from '../../api/user';

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
         return <ComposedComponent user={this.state.user} {...this.props} />;
       }
    }

  } 
}

export default withAuthentication;