import React, { Component } from 'react';
import Nav from '../Nav/Nav.jsx';
import './App.css';

export default class App extends Component {

  render() {
    return (
        <div className="App">
        <div className="nav">
          <Nav />
        </div>
        <div className="props">
          {this.props.children}
        </div>
      </div>
    );
  }
}
