import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import mic from '../../assets/mic.png';
import logo from '../../assets/tornado.svg'
import './styles.css';

function twist() {
  return (
    <div className="container">
      
      <h2 id="logo-1"><img id="logo"src={logo} alt=""/>Twist<span id="logo-2">App</span></h2>
      <h2 id="title">Qual Serviço Deseja?</h2>
      <img id="mic" src={mic} alt=""/>
      <br/>
      <Link to="/twist"><a>não posso falar no momento</a></Link>
    </div>
  );
}

export default twist;
