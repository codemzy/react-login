import React from 'react';
import ReactDOM from 'react-dom';

//components
import Main from './login/components/Main';
import LoginForm from './login/components/LoginForm';


function App(props) {
  return (
    <Main title="Log In">
      <LoginForm />
    </Main>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));