import React, { PropTypes } from 'react';

const VideoContainer = (props) => {
  return (
    <div className="video-container">
      <iframe src={props.URL} frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

VideoContainer.PropTypes = {
  URL: PropTypes.string.isRequired
}

module.exports = VideoContainer;
