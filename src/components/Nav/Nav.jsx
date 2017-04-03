import React, { Component } from 'react';
import { Link } from 'react-router';
import './Nav.css';

export default class Nav extends Component {

  render() {
    return (
      <nav className="navbar-container">
        <div className="navbar-header">
          <ul className="navbar">
            <img src={require('./evolent.png')} className="logo" />
            <li><Link to="/add">Add Contacts</Link></li>
            <li><Link to="/list">List Contacts</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
  }
