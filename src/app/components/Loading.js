import React from 'react';

function Loading(props) {
  return (
    <div className="spinner-border text-light" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loading;