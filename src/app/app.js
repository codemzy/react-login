import React from 'react';
import ReactDOM from 'react-dom';

//components
import Main from './login/components/Main';
import LoginForm from './login/components/LoginForm';


function App(props) {
  return (
    <Main title="Log In" footer={<small><a href="#" className="text-white"><u>Don't have an account?</u></a></small>}>
      <LoginForm />
    </Main>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));