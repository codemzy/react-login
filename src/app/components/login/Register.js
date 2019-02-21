import React from 'react';
import { Link } from 'react-router-dom'
import { appPath } from '../../config/settings';

//components
import Main from './Main';
import RegisterForm from './Register_Form';

function Register(props) {
  return (
    <Main title="Register" footer={<small><p className="text-white">Already have an account? <Link to={appPath + "/login"} className="text-white"><u>Log In</u></Link></p></small>}>
      <RegisterForm title="testing title"/>
    </Main>
  );
}

export default Register;