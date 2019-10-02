import React from 'react';
import Loader from './Loader';
import './TangerineTemplate.css';

const TangerineTemplate = () => {
  return (
    <div id="tangerine">
      <section id="header">
        <span role="img" aria-label="orange">🍊</span>
        <span>&nbsp;귤읽기</span>
      </section>
      <section id="text-area">
        <Loader/>
      </section>
    </div>
  );
}

export default TangerineTemplate;