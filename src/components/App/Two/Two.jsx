import React, { Component } from 'react';
import './Two.css';

export default class Two extends Component {


render() {
  return (
    <div className="two">
      <br/>
      <h1>Dashboard</h1>
      <br/>
      <br/>
      <img src={require('./weight.png')} className="weight chart" />
      <br/>
      <br/>
      <img src={require('./bloodpressure.png')} className="bloodpressure chart" />
      <br/>
      <br/>
      <img src={require('./compliance.png')} className="compliance chart" />
      <br/>
      <br/>
      <img src={require('./pulse.png')} className="pulse chart" />
      <br/>
      <br/>
      <img src={require('./heartrate.png')} className="heartrate chart" />
    </div>
    );
  }
}
