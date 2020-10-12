import React from 'react';
import { Link } from 'react-router-dom';

const regEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 1,
      email: 'exemplo@mail.com',
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(event) => this.setState({ email: event.target.value })}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(event) => this.setState({ password: event.target.value.length })}
          placeholder="digite sua senha"
        />
        <Link to="/home">
          <button onClick={this.handleClick}>Acessar</button>
        </Link>
        <Link to="/home">
          <button onClick={this.handleClick}>Google</button>
        </Link>
        <Link to="/home">
          <button onClick={this.handleClick}>Facebook</button>
        </Link>
      </div>
    );
  }
}

export default Login;
