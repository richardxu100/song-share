import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Blaze from 'meteor/gadicc:blaze-react-component';

export default class Navbar extends Component {

  handleLogout = (event) => {
    event.preventDefault();
    AccountsTemplates.logout();
    console.log('We should have logged out');
  }

  render() {
    return (
      <nav>
        <div className="indigo nav-wrapper">
          <a href="#" className="brand-logo center">{this.props.title}</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              {this.props.currentUser
                ? <a
                   className="waves-effect waves-light btn"
                   onClick={this.handleLogout}
                   href="#!">Log-Out</a>
                : <a
                   className="waves-effect waves-light btn modal-trigger"
                   href="#modal2">Log-In</a>
              }
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
