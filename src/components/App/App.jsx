import React, { Component } from 'react';
import Nav from '../Nav/Nav.jsx';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <Nav />
        </div>
        <div className="container">
        </div>
      </div>
    );
  }
}
