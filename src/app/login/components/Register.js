import React from 'react';
import { Link } from 'react-router-dom'
import { basePath } from '../../config/router';

//components
import Main from './Main';


function Register(props) {
  return (
    <Main title="Register" footer={<small><p className="text-white">Already have an account? <Link to={basePath + "/login"} className="text-white"><u>Log In</u></Link></p></small>}>
      <p>The form will be here</p>
    </Main>
  );
}

export default Register;