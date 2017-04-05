import React, { Component } from 'react';
import './List.css';

export default class List extends Component {
  componentWillMount() {
    this.props.getAllContacts();
  }

  showContacts(contacts) {
    return contacts.map((render, index) => {
      return (
        <ul key={index} className="results-container">
          <li>{render.first_name}</li>
          <li>{render.last_name}</li>
          <li>{render.email}</li>
          <li>{render.phone_number}</li>
          <li>{render.status}</li>
        </ul>
      );
    });
  }

  render() {
    const contacts = this.props.getAllContacts;

    return (
      <div className="list">
        <br/>
        <h1>All Contacts</h1>
        {this.showContacts(contacts)}
      </div>
    );
  }
}
