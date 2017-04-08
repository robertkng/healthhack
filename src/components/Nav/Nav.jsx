import React, { Component } from 'react';
import { Link } from 'react-router';
import './Nav.css';

export default class Nav extends Component {

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-button-container">
<<<<<<< HEAD
          <img src={require('./healthsuccess.png')} className="logo" />
          <Link to="/three" className="navbar-button">Tips</Link>
          <Link to="/three" className="navbar-button">Alerts</Link>
          <Link to="/two" className="navbar-button">Dashboard</Link>
          <Link to="/" className="navbar-button">Home</Link>
=======
          <img src={require('./evolent.png')} className="logo" />
          <Link to="/add" className="navbar-button">Add Contacts</Link>
          <Link to="/" className="navbar-button">List Contacts</Link>
          <Link to="/home" className="navbar-button">Home</Link>
>>>>>>> b60893c8c821cbc90b7952e217f16ab5e0d83c72
        </div>
      </div>
    );
  }
  }
