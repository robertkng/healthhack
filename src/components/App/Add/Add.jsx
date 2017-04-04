import React, { Component } from 'react';
import './Add.css';

export default class Add extends Component {

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

  addToDb(e) {
    fetch('/itinerary/itinerary', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        title: this.state.itinName,
        itinerary: this.state.itinDescription,
      })
    })
    .then((res) => {
      this.getAllItineraries();
      this.reset();
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="info">
        <br/>
        <div className="first-name">
        First Name
        <br/>
          <input
            id="first-name"
            type="text"
            maxLength="50"
            value={this.state.firstName}
            onChange={this.addFirstName.bind(this)}
            className="form"
          />
        </div>
        <br/>
        <div className="last-name">
        Last Name
        <br/>
          <input
            id="last-name"
            type="text"
            maxLength="50"
            value={this.state.lastName}
            onChange={this.addLastName.bind(this)}
            className="form"
          />
        </div>
        <br/>
        <div className="email">
        Email
        <br/>
          <input
            id="email"
            type="text"
            maxLength="50"
            value={this.state.email}
            onChange={this.addEmail.bind(this)}
            className="form"
          />
        </div>
        <br/>
        <div className="phone-number">
        Phone Number
        <br/>
          <input
            id="phone-number"
            type="text"
            maxLength="10"
            value={this.state.phoneNumber}
            onChange={this.addPhoneNumber.bind(this)}
            className="form"
          />
        </div><br/>
        <div className="status">
        Status
        <br/>
          <select
            valueLink="{this.linkState('val')}"
            className="form">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button
          id="onclick"
          onClick
        >SUBMIT CONTACT
        </button>
      </div>
    );
  }
  };

