import React, { PropTypes } from 'react';
import Card from './card';
import VideoContainer from './videoContainer';

const SongWrapper = (props) => {
  const { songs } = props;
  return songs === []
    ? <p>Loading</p>
    : <div className="song wrapper">
        <div className="row">
          {songs && songs.map((song) => {
            // debugger;
            const { url, artist, description, submitter, isPrivate } = song;
            return (
              <Card
                song={song}
                artist={artist}
                description={description}
                submitter={submitter}
                currentUser={props.currentUser}
                // onDeleteSong={props.onDeleteSong}
                key={song._id}
                url={url}
                checked={isPrivate}
              />
            )
          })}
        </div>
        <div className="fixed-action-btn" style={{bottom: '55px', right: '44px'}}>
          <a
            className="teal modal-trigger btn-floating waves-effect waves-light btn-large red"
            href="#modal1">
            <i className="large material-icons">add</i>
          </a>
        </div>
      </div>
}

SongWrapper.PropTypes = {
  songs: PropTypes.array.isRequired
}

module.exports = SongWrapper;
