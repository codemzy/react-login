import React, { useEffect } from 'react';
import { appName } from '../../config/settings';

export default function(ComposedComponent, title) {
  
  function HeadHOC(props) {
    
     useEffect(() => {
       document.title = `${title} | ${appName}`;
     });
    
    return <ComposedComponent {...props} />;
  }

  return HeadHOC;
  
}