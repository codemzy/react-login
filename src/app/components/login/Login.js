import React from 'react';
import { Link } from 'react-router-dom'
import { appPath } from '../../config/settings';

// hoc
import withHead from '../hocHead';

//components
import Main from './Main';
import LoginForm from './Login_Form';

function Login(props) {
  return (
    <Main title="Log In" footer={<small><p className="text-white">Don't have an account? <Link to={appPath + "/register"} className="text-white"><u>Register</u></Link></p></small>}>
      <LoginForm />
    </Main>
  );
}

export default withHead(Login, "Log In");

