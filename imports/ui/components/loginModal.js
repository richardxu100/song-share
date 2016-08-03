import React, { PropTypes } from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

const LoginModal = (props) => {
  return (
    <div>
      {/* <Switch /> */}
      <div id="modal2" className="modal">
        <div className="modal-content">
          <Blaze template="atForm"/>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Log-In</a>
        </div>
      </div>
    </div>
  )
}

module.exports = LoginModal;
