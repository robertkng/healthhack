import React, { Component } from 'react';
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
              <li><a href="">List Contacts</a></li>
              <li><a href="">Add Contacts</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  }
