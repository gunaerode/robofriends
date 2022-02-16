import React from 'react';

function Scroll(props) {
  return (
    <div
      style={{ overflowY: 'scroll', border: '2px solid #000', height: '400px' }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
