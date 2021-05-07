import React from "react";
import { useAudio } from "react-use";

import "./Player.scss";

const Player = ({
  track,
  addFavoriteTrack,
  deleteFavoriteTrack,
  isFavoriteTrack,
}) => {
  const source = track.previewURL;
  const name = track.name;
  const artist = track.artistName;
  const [audio, state, controls] = useAudio({
    src: source,
    autoPlay: true,
  });

  return (
    <div className="player">
      {audio}
      <div className="cancion">
        <div className="info-cancion">
          <h3>{name}</h3>
          <h5>{artist}</h5>
        </div>
        {isFavoriteTrack(track) ? (
          <i
            id="cancion-favorita"
            className="fas fa-heart"
            onClick={() => {
              deleteFavoriteTrack(track);
            }}
          ></i>
        ) : (
          <i
            className="far fa-heart"
            onClick={() => {
              addFavoriteTrack(track);
            }}
          ></i>
        )}
      </div>
      <div className="controles-1">
        {state.paused ? (
          <i className="fas fa-play" onClick={controls.play}></i>
        ) : (
          <i className="fas fa-pause" onClick={controls.pause}></i>
        )}
        <div className="tiempo">
          <span>{state.time.toFixed(2)}</span>
          <input
            type="range"
            value={state.time}
            onChange={(e) => controls.seek(Number(e.target.value))}
            min="0.0"
            max={state.duration}
            step="0.05"
          />
          <span>{state.duration.toFixed(2)}</span>
        </div>
      </div>
      <div className="controles-2">
        {state.muted ? (
          <i className="fas fa-volume-mute" onClick={controls.unmute}></i>
        ) : (
          <i className="fas fa-volume-down" onClick={controls.mute}></i>
        )}
        <input
          type="range"
          value={state.volume}
          onChange={(e) => controls.volume(Number(e.target.value))}
          min="0.0"
          max="1.0"
          step="0.05"
        />
      </div>
    </div>
  );
};

export default Player;
