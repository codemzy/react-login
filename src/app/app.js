import React from 'react';
import ReactDOM from 'react-dom';

// app routes
import routes from './router';

// context providers
import { UserProvider } from './context/User';
import { AlertProvider } from './context/Alert';

// App
const App = () => (
  <UserProvider>
    <AlertProvider>
        {routes}
    </AlertProvider>
  </UserProvider>
);

// render App
ReactDOM.render(<App />, document.getElementById('app'));