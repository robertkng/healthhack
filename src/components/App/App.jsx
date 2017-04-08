import React, { Component } from 'react';
import Nav from '../Nav/Nav.jsx';
<<<<<<< HEAD
=======
import List from './List/List.jsx';
>>>>>>> b60893c8c821cbc90b7952e217f16ab5e0d83c72
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      result: {},
    };
  }

  getAllContacts() {
    fetch('/contacts')
    .then(r => r.json())
    .then((results) => {
      this.setState({
        contacts: results.data,
      });
      console.log(this.state);
    })
    .catch(err => err);
  }

  render() {
    return (
<<<<<<< HEAD
        <div className="App">
=======
      <div className="App">
>>>>>>> b60893c8c821cbc90b7952e217f16ab5e0d83c72
        <div className="nav">
          <Nav />
        </div>
        <div className="props">
          {this.props.children}
<<<<<<< HEAD
=======
          <List
            contacts={this.state.contacts}
            getAllContacts={this.getAllContacts.bind(this)}
          />
>>>>>>> b60893c8c821cbc90b7952e217f16ab5e0d83c72
        </div>
      </div>
    );
  }
}
