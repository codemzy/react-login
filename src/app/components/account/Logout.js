import React from 'react';
// context
import UserContext from '../../context/User';
// api calls
import { userLogout } from '../../api/user';
// hoc
import withHead from '../hocHead';
//components
import Main from '../login/Main';

function Logout(props) {
    // context
    const userContext = React.useContext(UserContext);

    // log out user on mount
    React.useEffect(() => {
        userLogout().finally(() => {
            userContext.updateUser(false); // we can just remove the user from context
            // window.location.href = window.location.protocol + "//" + window.location.host + "/"; // or we could redirect somewhere outside the app
        });
    }, []); // run only once

    // loading while sending logout request
    return <Main loading={true} />;
};

export default withHead(Logout, "Logging out...");