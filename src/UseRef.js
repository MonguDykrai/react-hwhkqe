import React, { useRef } from 'react';

export default function UseRef() {
  const username = useRef('jack');
  return (
    <>
      <h4>{username.current}</h4>
      <button
        onClick={() => {
          debugger;
          username.current = 'rose';
          console.log(username.current);
        }}
      >
        set as rose
      </button>
    </>
  );
}
