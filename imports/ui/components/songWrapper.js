import React, { PropTypes } from 'react';
import Card from './card';
import VideoContainer from './videoContainer';

const SongWrapper = (props) => {
  const { songs } = props;
  return songs === []
    ? <p>Loading</p>
    : <div className="song wrapper">
        <div className="row">
          {songs.map((song, i) => {
            const { URL, artist, description, submitter } = song;
            return (
              <div className="col s12 m6 l6" key={i}>
                <VideoContainer URL={URL}/>
                <Card
                  artist={artist}
                  description={description}
                  submitter={submitter}
                  currentUser={props.currentUser}
                  onDeleteSong={props.onDeleteSong}
                />
              </div>
            )
          })}
        </div>
      </div>
}

SongWrapper.PropTypes = {
  songs: PropTypes.array.isRequired
}

module.exports = SongWrapper;
