import React from 'react';
import ReactDOM from 'react-dom';

// routes
import routes from './config/router';

//components
import Login from './login/components/Login';


// render app
ReactDOM.render(routes, document.getElementById('app'));