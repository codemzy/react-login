import React, { useEffect } from 'react';
import { appName } from '../config/settings';

// update document.title for page
export default function withHead(ComposedComponent, title) {
  return function Head(props) {
    useEffect(() => {
      document.title = `${props.title || title} | ${appName}`; // can override title param with compent props
    });
    return <ComposedComponent {...props} />;
  }
}