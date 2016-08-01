import React, { PropTypes } from 'react';
import AccountsUIContainer from '../containers/AccountsUIContainer';

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">{props.title}</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><AccountsUIContainer align="right"/></li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.PropTypes = {

}

module.exports = Navbar;
