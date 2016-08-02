import React, { PropTypes } from 'react';
import AccountsUIContainer from '../../containers/AccountsUIContainer';

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">{props.title}</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><AccountsUIContainer /></li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.PropTypes = {
  title: PropTypes.string
}

module.exports = Navbar;
