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
            return (
              <div className="col s12 m6 l6" key={i}>
                <VideoContainer />
                <Card />
              </div>
            )
          })}
        </div>
      </div>
}

// import React, { PropTypes } from 'react';
// import Card from './card';
// import VideoContainer from './videoContainer';
//
// const SongWrapper = (props) => {
//   // const { songs } = props;
//   console.log(props.songs);
//   return (
//     <div className="song wrapper">
//       <div className="row">
//         {songs
//           ? songs.map.((song) => {
//             return (
//               <div className="col s12 m6 l6">
//                 <VideoContainer />
//                 <Card />
//               </div>
//             )
//           }) : ''}
//       </div>
//     </div>
//   )
// }

SongWrapper.PropTypes = {

}

module.exports = SongWrapper;
