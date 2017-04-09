import React, { Component } from 'react';
import './Three.css';

export default class Three extends Component {

render() {
  return (
    <div className="three">
      <br/>
      <h1>Alerts</h1>
        <select
          valueLink="{this.linkState('val')}"
          className="form">
          <option value="active">Alert: You have missed your water pill ( or blood pressure pill) today ( or for 2 days etc)</option>
        </select>
        <br/>
        <button id="onclick" onClick>SUBMIT</button>
    </div>
    );
  }
}
