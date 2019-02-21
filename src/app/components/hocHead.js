import React, { useEffect } from 'react';
import { appName } from '../config/settings';

export default function withHead(ComposedComponent, title) {
  return function Head(props) {
    useEffect(() => {
      document.title = `${props.title || title} | ${appName}`;
    });
    return <ComposedComponent {...props} />;
  }
}