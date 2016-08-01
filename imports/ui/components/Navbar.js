import React, { PropTypes } from 'react';

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Login</a></li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.PropTypes = {

}

module.exports = Navbar;
