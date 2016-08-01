import React, { PropTypes } from 'react';

const SongModal = (props) => {
  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4 className="center-align">Add a Song</h4>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">person_pin</i>
                <input id="icon_prefix" type="text" className="validate" />
                <label htmlFor="icon_prefix">Artist Name</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">mode_edit</i>
                <input id="icon_telephone" type="tel" className="validate" />
                <label htmlFor="icon_telephone">Description</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">library_music</i>
                <input type="text" />
                <label htmlFor="music_link">Song URL</label>
              </div>
            </div>
            <button href="#!" className="right modal-action modal-close waves-effect waves-green btn-flat" type="submit">Agree</button>
          </form>
        </div>
      </div>
    </div>
  )
}

SongModal.PropTypes = {

}

module.exports = SongModal;
