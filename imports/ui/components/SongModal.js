import React, { PropTypes } from 'react';

const SongModal = ({
  onSubmit,
  onArtistChange,
  onDescriptionChange,
  onUrlChange,
  artist,
  description,
  url
}) => {
  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4 className="center-align">Add a Song</h4>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">person_pin</i>
                <input
                  type="text"
                  className="validate"
                  onChange={onArtistChange}
                  value={artist}
                  required=""
                  aria-required="true"
                />
                <label htmlFor="icon_prefix">Artist Name</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">mode_edit</i>
                <input
                  type="text"
                  className="validate"
                  onChange={onDescriptionChange}
                  value={description}
                  required=""
                  aria-required="true"
                />
                <label htmlFor="icon_telephone">Description</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">library_music</i>
                <input
                  type="text"
                  onChange={onUrlChange}
                  value={url}
                  required=""
                  aria-required="true"
                  className="validate"
                />
                <label htmlFor="music_link">Embed URL (Youtube, embed link)</label>
              </div>
            </div>
            <button
              href="#!"
              className="right modal-action modal-close waves-effect waves-green text-white btn-flat"
              type="submit"
              onClick={onSubmit}>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

SongModal.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  onArtistChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  artist: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

module.exports = SongModal;
