import React, { PropTypes } from 'react';
import Switch from './switch';

const SongWrapper = (props) => {
  return (
    <div className="song wrapper">
      <div className="row">
        <div className="col s12 m6 l6">
          <div className="video-container">
            <iframe src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="card">
            <div className="card-content">
              <span className="card-title">Artist Name</span>
              <p>Awesome Song</p>
            </div>
            <div className="center-align card-action">
              <div className="right-align chip">
                <img src="http://i.dailymail.co.uk/i/pix/2016/05/18/15/3455092D00000578-3596928-image-a-20_1463582580468.jpg" alt="Contact Person" />
                  Jane Doe
              </div>
            <Switch />
            </div>
          </div>
        </div>
        <div className="col s12 m6 l6">
          <div className="video-container">
            <iframe src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

SongWrapper.PropTypes = {

}

module.exports = SongWrapper;
