import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header-logo">
        <img src={require('./evolent.png')} className="logo" />
      </div>
    );
  }
}




