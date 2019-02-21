import React, { useEffect } from 'react';
import { appName } from '../config/settings';

export default function withHead(ComposedComponent, headInfo) {
  return function Head(props) {
    let head = { ...headInfo, ...props.head }; // head info passed to function or in props
    useEffect(() => {
      document.title = `${head.title} | ${appName}`;
    });
    return <ComposedComponent {...props} />;
  }
}