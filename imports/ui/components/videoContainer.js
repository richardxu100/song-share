import React, { PropTypes } from 'react';

const VideoContainer = ({ url }) => {
  return (
    <div className="z-depth-2 video-container">
      <iframe src={url} frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

VideoContainer.PropTypes = {
  url: PropTypes.string.isRequired
}

module.exports = VideoContainer;
