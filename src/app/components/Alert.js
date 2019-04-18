import React, { useEffect }  from 'react';

// context
import {getContext} from '../context';

// alert component
function Alert(props) {

  useEffect(() => {
    return () => { props.alertContext.updateAlert(false) }; // returns function to run on dismount
  }, []);

  if (props.alertContext.alert) {
    return (
      <div className={"alert alert-dismissible alert-" + props.alertContext.alert.type} role="alert">
        <button type="button" className="close" aria-label="Close" onClick={props.alertContext.updateAlert.bind(this, false)}><span aria-hidden="true">&times;</span></button>
        {props.alertContext.alert.message}
      </div>
    );
  } else {
    return null; // if no alert return nothing
  }
}

export default getContext({
  alert
})(Alert);