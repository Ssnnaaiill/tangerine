import React from 'react';

const Displayer = ({ name, text }) => {
  return (
    <section id="displayer">
      <div id="title">{name}</div>
      <div id="text-content">
      {
        text.split('\n').map(
          (line) => {
            return (
              <span>{line}<br className="nodrag"/><br className="nodrag"/></span>
            );
          }
        )
      }
      </div>
    </section>
  );
}

export default Displayer;