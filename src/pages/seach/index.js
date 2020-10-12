import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/tornado.svg'
import './styles.css'

export default function search() {
 console.log('ok')
  return (
    <div className="container">
      <h2 id="logo-1"><img src={logo} alt=""/>Twist<span id="logo-2">App</span></h2>
      <h2>Qual Serviço Deseja?</h2>
      <input type="text" name="services" placeholder="Serviço"/>
      <br/>
      <Link to="/twist"><button>Proximo</button></Link>
    </div>
  )
}