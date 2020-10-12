import React, { Component } from 'react';
import shake from '../../assets/shake.mp4';
import './styles.css';

export default class index2 extends Component {
  constructor(props) {
    super(props);
    this.setTimeout = this.setTimeout.bind(this);
  }

  componentDidMount(shake) {
    this.setTimeout((shake) => {
      this.props;
    }, timeout);
    2;
  }
  render() {
    return (
      <div>
        <div className="container">
          <img src={shake} alt="bebe" />
        </div>
      </div>
    );
  }
}
