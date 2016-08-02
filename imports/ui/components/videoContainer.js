import React, { PropTypes } from 'react';

const VideoContainer = (props) => {
  return (
    <div className="video-container">
      <iframe src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

VideoContainer.PropTypes = {

}

module.exports = VideoContainer;
