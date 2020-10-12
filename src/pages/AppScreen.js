import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/style.css';
// import logoScreen from '../images';

function appScreen() {
  return (
    <div>
      <div className="logo-screen">
        <Link to="login">
          TWIST
          {/* <img alt="App Screen" src={logoScreen} /> */}
        </Link>
      </div>
    </div>
  );
}

export default appScreen;
