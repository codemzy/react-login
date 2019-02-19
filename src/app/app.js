import React from 'react';
import ReactDOM from 'react-dom';

import routes from './config/router'; // app routes
import withAuthentication from './components/auth/hocAuthentication'; // hoc user authentication

// App
const App = withAuthentication(function App() {
 return routes; 
});

// render App
ReactDOM.render(<App />, document.getElementById('app'));