import React, { Component } from 'react';
import Nav from '../Nav/Nav.jsx';
// import List from '../List/List.jsx';
// import Add from '../Add/Add.jsx';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Nav />
          </div>
        </div>
      </div>
    );
  }
}
