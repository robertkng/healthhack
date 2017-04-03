import React, { Component } from 'react';
import { Link } from 'react-router';
import './Nav.css';

export default class Nav extends Component {

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-button-container">
          <img src={require('./evolent.png')} className="logo" />
          <Link to="/add" className="navbar-button">Add Contacts</Link>
          <Link to="/" className="navbar-button">List Contacts</Link>
        </div>
      </div>
    );
  }
  }
