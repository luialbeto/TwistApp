import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import mic from '../../assets/mic.png';
import logo from '../../assets/logo.png'
import './styles.css';

function twist() {
  return (
    <div className="container">
      <img src={logo} alt=""/>
      <h2 id="logo-1">Twist<span id="logo-2">App</span></h2>
      <h2>Qual Serviço Deseja?</h2>
      <input type="text" name="services" placeholder="Serviço"/>
      <br/>
      <Link to="/twist"><a>não posso falar no momento</a></Link>
    </div>
  );
}

export default twist;
