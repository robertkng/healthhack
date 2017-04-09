import React, { Component } from 'react';
import './Three.css';
import 'whatwg-fetch';

export default class Three extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipient: ''
    };
  }
  changeInput(event) {
    this.setState({recipient: event.target.value});
  }

  sendSms() {
    fetch('/sendsms', {
      method: 'POST',
      headers: {
        Accept: 'application/JSON',
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({"recipient": this.state.recipient})
    });
  }

render() {
  return (
    <div className="three">
      <br/>
      <h1>Call To Action Alerts</h1>
        <img src={require('./alert.png')} className="alert" />
        <br/>
        <br/>
        <select
          valueLink="{this.linkState('val')}"
          className="form">
          <option onChange={this.changeInput.bind(this)} value={this.state.recipient}>Alert: You have missed your water pill ( or blood pressure pill) today ( or for 2 days etc)
          </option>
        </select>
        <br/>
        <button onClick={this
          .sendSms
          .bind(this)}>Alert
        </button>
    </div>
    );
  }
}
