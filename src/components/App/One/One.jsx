import React, { Component } from 'react';
import './One.css';

export default class One extends Component {

render() {
  return (
    <div className="one">
      <br/>
      <h1>This is how you're doing</h1>
      <img src={require('./patient.png')} className="patient" />
    </div>
    );
  }
}
