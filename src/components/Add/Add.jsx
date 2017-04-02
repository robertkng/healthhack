import React, { Component } from 'react';
import './Add.css';

class Add extends Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      status: '',
    }
    // this.reset = this.reset.bind(this);
  }

  addFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  addLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  addEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  addPhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
  }

  render() {
    return (
      <div className="info">
        First Name
          <input
            id="first-name"
            type="text"
            maxLength="50"
            value={this.state.firstName}
            onChange={this.addFirstName.bind(this)}
          /><br/>
        Last Name
          <input
            id="last-name"
            type="text"
            maxLength="50"
            value={this.state.lastName}
            onChange={this.addLastName.bind(this)}
          /><br/>
        Email
          <input
            id="email"
            type="text"
            maxLength="50"
            value={this.state.email}
            onChange={this.addEmail.bind(this)}
          /><br/>
        Phone Number
          <input
            id="phone-number"
            type="text"
            maxLength="10"
            value={this.state.phoneNumber}
            onChange={this.addPhoneNumber.bind(this)}
          /><br/>
        Status
          <select valueLink="{this.linkState('val')}">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select><br/>
      </div>
    );
  }
  }

export default Add;
