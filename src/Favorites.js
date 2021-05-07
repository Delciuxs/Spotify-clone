import React from "react";
import { Link } from "react-router-dom";

import Track from "./Track";

import "./Favorites.scss";

const Favorites = ({
  setPlayTrack,
  favoriteTracks,
}) => {
  const tracks = favoriteTracks.toList();
  return (
    <>
      <h1 className="favorite-header">Favorites</h1>
      {tracks.size === 0 && (
        <div className="text-container">
          <h3>You have no favorite trakcs :c</h3>
          <h5>
            Check out this <Link to="/">TOP</Link> tracks, you may like them
          </h5>
        </div>
      )}
      <div className="favorite-tracks-container">
        {tracks.size !== 0 &&
          tracks.map((track, i) => (
            <Track
              key={i}
              track={track}
              setPlayTrack={setPlayTrack}
            />
          ))}
      </div>
    </>
  );
};

export default Favorites;
