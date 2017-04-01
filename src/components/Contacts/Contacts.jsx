import React, { Component } from 'react';
import './Contacts.css';

class Contacts extends Components {

  constructor() {
    super();
    this.state = {
      firstName = '',
      lastName = '',
      email = '',
      phoneNumber = '',
      status = '',
    }
    this.reset = this.reset.bind(this);
  }

  updateFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  updateLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  render() {
    return (
      <div className="info">
        <h1>Contacts</h1>
        <input
          id="first-name"
          type="text"
          maxLength="50"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.updateFirstName.bind(this)}
        />
      </div>
    );
  }
}

export default Contacts;
