import React, { Component } from 'react';
import Nav from '../Nav/Nav.jsx';
import Header from '../Header/Header.jsx';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <Nav />
        </div>
      </div>
    );
  }
}
