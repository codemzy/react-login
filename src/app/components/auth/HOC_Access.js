import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkAuth } from '../../api/user';

const Access = (ComposedComponent) => { 
  
  return class RequireAuth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        authenticated: false
      };
    }
    
    componentDidMount() {
      checkAuth.then(() => {
        this.setState({authenticated: false, loading: false});
      }).catch(() => {
        this.setState({loading: false});
      })
    } 
    
    render() { 
       const { isAuthenticated, isLoading } = this.state;
       if(this.state.loading) {
           return <div>Loading...</div>;
       } else if (!this.state.authenticated) {
         return <Redirect to="/login" />;
       } else {
         return <ComposedComponent {...this.props} />;
       }
    }

  } 
}

export default Access;