import React from 'react';
import { Link } from 'react-router-dom'
import { appPath } from '../../config/settings';

// hoc
import withHead from '../hocHead';

//components
import Main from './Main';
import ForgotForm from './Forgot_Form';

function Forgot(props) {
  return (
    <Main title="Forgot password" footer={<small><p className="text-white">Remembered your password? <Link to={appPath + "/login"} className="text-white"><u>Log in</u></Link></p></small>}>
      <ForgotForm />
    </Main>
  );
}

export default withHead(Forgot, "Forgotten Password");