import React from 'react';
import ReactDOM from 'react-dom';

// app routes
import routes from './router';

// context providers
import { UserProvider } from './context/User';

// App
const App = () => (
  <UserProvider>
    {routes}
  </UserProvider>
);

// render App
ReactDOM.render(<App />, document.getElementById('app'));