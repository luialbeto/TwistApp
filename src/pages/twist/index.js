import React, { useState } from 'react';
import mic from '../../assets/mic.png';
import './styles.css';

function twist() {
  return (
    <div className="container">
      <h2>Qual Serviços Deseja?</h2>
      <div className="mic">
        <img src={mic} alt="" />
      </div>
      <a href="">não posso falar no momento</a>
    </div>
  );
}

export default twist;
