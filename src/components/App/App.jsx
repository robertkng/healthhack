import React, { Component } from 'react';
import Contacts from '../Contacts/Contacts.jsx';
import './App.css';

export default class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Contacts</h1>
        <div>
          <Contacts />
        </div>
      </div>
    );
  }
}
