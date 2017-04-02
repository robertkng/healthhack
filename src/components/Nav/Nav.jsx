import React, { Component } from 'react';
import { Link } from 'react-router';
// import List from '../List/List.jsx';
// import Add from '../Add/Add.jsx';
import './Nav.css';

export default class Nav extends Component {

  render() {
    return (
      <nav className="navbar narbar-default">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><Link to={"/add"}>Add Contacts</Link></li>
              <li><Link to={"/list"}>List Contacts</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  }
