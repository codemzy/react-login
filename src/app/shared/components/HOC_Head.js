import React, { useEffect } from 'react';
import { appName } from '../../config/settings';

export default function(ComposedComponent, title) {
  
  function Head(props) {
    
     useEffect(() => {
       document.title = `${title} | ${appName}`;
     });
    
    return <ComposedComponent {...props} />;
  }

  return Head;
  
}