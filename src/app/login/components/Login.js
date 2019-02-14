import React from 'react';

//components
import Main from './Main';
import LoginForm from './Login_Form';


function Login(props) {
  return (
    <Main title="Log In" footer={<small><a href="#" className="text-white"><u>Don't have an account?</u></a></small>}>
      <LoginForm />
    </Main>
  );
}

export default Login;

