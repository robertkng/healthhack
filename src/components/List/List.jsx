import React, { Component } from 'react';
import Contacts from '../Contacts/Contacts.jsx';
import List from '../List/List.jsx';
import './App.css';

export default class List extends Component {

  render() {
    return (
      <div className="list feature">
        <List />
      </div>
      <div className="edit feature">
      </div>
      <h1></h1>
      <div>
        <Contacts />
      </div>
    );
  }
}
