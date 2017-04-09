import React, { Component } from 'react';
import { Link } from 'react-router';
import './Nav.css';

export default class Nav extends Component {

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-button-container">
          <img src={require('./healthsuccess.png')} className="logo" />
          <Link to="/four" className="navbar-button">Tips</Link>
          <Link to="/three" className="navbar-button">Alerts</Link>
          <Link to="/two" className="navbar-button">Dashboard</Link>
          <Link to="/" className="navbar-button">Profile</Link>
        </div>
      </div>
    );
  }
  }
