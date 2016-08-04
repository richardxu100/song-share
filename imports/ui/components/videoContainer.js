import React, { PropTypes } from 'react';

const VideoContainer = (props) => {
  return (
    <div className="video-container">
      <iframe src={props.url} frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

VideoContainer.PropTypes = {
  url: PropTypes.string.isRequired
}

module.exports = VideoContainer;
