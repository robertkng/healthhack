import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {

  render() {
    return (
      <div id="home">
        <img src={require('./evolenthealth.png')} />
      </div>
    );
  }
}
