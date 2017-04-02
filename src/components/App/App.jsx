import React, { Component } from 'react';
import Nav from '../Nav/Nav.jsx';
// import List from '../List/List.jsx';
// import Add from '../Add/Add.jsx';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="nav">
          <Nav />
        </div>
        <div className="add feature">
        </div>
        <div className="list feature">
        </div>
        <h1></h1>
        <div>
        </div>
      </div>
    );
  }
}
