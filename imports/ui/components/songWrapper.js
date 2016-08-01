import React, { PropTypes } from 'react';
import Switch from './switch';

const SongWrapper = (props) => {
  return (
    <div class="song wrapper">
      <div class="row">
        <div class="col s12 m6 l6">
          <div class="video-container">
            <iframe src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
          </div>
          <div class="card">
            <div class="card-content">
              <span class="card-title">Artist Name</span>
              <p>Awesome Song</p>
            </div>
            <div class="center-align card-action">
              <div class="right-align chip">
                <img src="http://i.dailymail.co.uk/i/pix/2016/05/18/15/3455092D00000578-3596928-image-a-20_1463582580468.jpg" alt="Contact Person" />
                  Jane Doe
              </div>
            <Switch />
            </div>
          </div>
        </div>
        <div class="col s12 m6 l6">
          <div class="video-container">
            <iframe src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

SongWrapper.PropTypes = {

}

module.exports = SongWrapper;
