<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/tornado.svg';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import mic from '../../assets/mic.png';
import logo from '../../assets/tornado.svg'
>>>>>>> a58c0a7c349707abb8bedaf928abce99c6b36066
import './styles.css';

export default function twist() {
  console.log('ok');
  return (
    <div className="container">
<<<<<<< HEAD
      <img src={logo} alt="" />
      <h2 id="logo-1">
        Twist<span id="logo-2">App</span>
      </h2>
      <h2>Qual Serviço Deseja?</h2>
      <input type="text" name="services" placeholder="Serviço" />
      <br />
      <Link to="/twist">
        <a>não posso falar no momento</a>
      </Link>
=======
      
      <h2 id="logo-1"><img id="logo"src={logo} alt=""/>Twist<span id="logo-2">App</span></h2>
      <h2 id="title">Qual Serviço Deseja?</h2>
      <img id="mic" src={mic} alt=""/>
      <br/>
      <Link to="/twist"><a>não posso falar no momento</a></Link>
>>>>>>> a58c0a7c349707abb8bedaf928abce99c6b36066
    </div>
  );
}
