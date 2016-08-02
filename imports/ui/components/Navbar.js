import React, { PropTypes } from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">{props.title}</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Blaze template="atForm" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.PropTypes = {
  title: PropTypes.string
}

module.exports = Navbar;
