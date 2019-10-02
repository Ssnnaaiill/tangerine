import React from 'react';

const Displayer = ({ text }) => {
  return (
    <div>
    {
      text.split('\n').map(
        (line) => {
          return (
            <span>{line}<br/></span>
          );
        }
      )
    }</div>
  );
}

export default Displayer;