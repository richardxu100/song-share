import React, { PropTypes } from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

const LoginModal = (props) => {
  return (
    <div>
      <div id="modal2" className="modal">
        <div className="modal-content">
          <Blaze template="atForm"/>
        </div>
      </div>
    </div>
  )
}

module.exports = LoginModal;
