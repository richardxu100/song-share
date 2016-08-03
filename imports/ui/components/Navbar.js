import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Blaze from 'meteor/gadicc:blaze-react-component';

export default class Navbar extends Component {

  handleLogout = () => {
    // Meteor.logout();
    AccountsTemplates.logout();
    console.log('We should have logged out');
  }

  render() {
    console.log(Meteor.user() ? 'Meteor.user() is truthy' : 'Meteor.user() is falsy')
    return (
      <nav>
        <div className="nav-wrapper">
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
              {/* {this.userId ? <p>Statement's true</p> : <p>Statement's false</p>} */}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
