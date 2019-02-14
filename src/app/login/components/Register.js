import React from 'react';

//components
import Main from './Main';


function Register(props) {
  return (
    <Main title="Register" footer={<small><a href="#" className="text-white">Already have an account? <u>Log in</u></a></small>}>
      <p>The form will be here</p>
    </Main>
  );
}

export default Register;