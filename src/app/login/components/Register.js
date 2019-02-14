import React from 'react';
import { Link } from 'react-router-dom'
import { basePath } from '../../config/router';

//components
import Main from './Main';
import RegisterForm from './Register_Form';

function Register(props) {
  return (
    <Main title="Register" footer={<small><p className="text-white">Already have an account? <Link to={basePath + "/login"} className="text-white"><u>Log In</u></Link></p></small>}>
      <RegisterForm />
    </Main>
  );
}

export default Register;