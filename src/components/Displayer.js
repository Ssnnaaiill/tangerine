import React from 'react';
import './Displayer.css';

const Displayer = ({ name, text }) => {
  return (
    <section id="displayer">
      <div id="title">{name}</div>
      <div id="text-content">
      {
        text.split('\n').map(
          (line) => {
            return (
              <span>{line}<br/><br/></span>
            );
          }
        )
      }
      </div>
    </section>
  );
}

export default Displayer;