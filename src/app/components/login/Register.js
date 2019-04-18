import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import * as paths from '../../router/paths';

// hoc
import withHead from '../hocHead';

// context
import { getContext } from '../../context';

// api calls
import { userRegister } from '../../api/user';

//components
import Main from './Main';
import Form from './Form';

function Register(props) {

  // state hook
  const [loading, setLoading] = useState(false);

  // submit the form
  const handleSubmit = function(form) {
    setLoading(true);
    userRegister(form.email, form.password).then((result) => {
        props.userContext.updateUser(result);
    });
  }

  return (
    <Main title="Register" footer={<small><p className="text-white">Already have an account? <Link to={paths.logIn} className="text-white"><u>Log In</u></Link></p></small>}>
      <h6 className="text-muted">Sign up with your email address and password.</h6>
      <Form
        loading={loading}
        handleSubmit={handleSubmit}
        email={true} password={true} confirm={true}
        button={{submit: "Create Account", submitted: "Creating Account"}} />
    </Main>
  );
}

export default getContext({
  user: true
})(withHead(Register, "Register"));