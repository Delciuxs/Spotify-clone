import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { Map } from "immutable";

import Content from "./Content";
import Navigation from "./Navigation";
import Player from "./Player";

import "./App.scss";

const App = () => {
  const [playTrack, setPlayTrack] = useState(null);
  const [favoriteTracks, setFavoriteTracks] = useState(Map);

  const _setPlayTrack = (track) => {
    setPlayTrack(track);
    updateLocalStoragePlayTrack(track);
  };

  const addFavoriteTrack = (track) => {
    if (!favoriteTracks.has(track.id)) {
      const favoriteTracksAux = favoriteTracks.set(track.id, track);
      setFavoriteTracks(favoriteTracksAux);
      updateLocalStorageFavoriteTracks(favoriteTracksAux);
    }
  };

  const deleteFavoriteTrack = (track) => {
    if (favoriteTracks.has(track.id)) {
      const favoriteTracksAux = favoriteTracks.delete(track.id);
      setFavoriteTracks(favoriteTracksAux);
      updateLocalStorageFavoriteTracks(favoriteTracksAux);
    }
  };

  const isFavoriteTrack = (track) => {
    return favoriteTracks.has(track.id);
  };

  const updateLocalStorageFavoriteTracks = (favoriteTracks) => {
    localStorage.setItem("favoriteTracks", JSON.stringify(favoriteTracks));
  };

  const updateLocalStoragePlayTrack = (playTrack) => {
    localStorage.setItem("playTrack", JSON.stringify(playTrack));
  };

  useEffect(() => {
    const favoriteTracksStr = localStorage.getItem("favoriteTracks");
    const playTrackStr = localStorage.getItem("playTrack");
    if (favoriteTracksStr && favoriteTracksStr.length > 0) {
      setFavoriteTracks(Map(JSON.parse(favoriteTracksStr)));
    }
    if (playTrackStr && playTrackStr.length > 0) {
      setPlayTrack(JSON.parse(playTrackStr));
    }
  }, []);

  return (
    <Router>
      <Navigation />
      <Content
        setPlayTrack={_setPlayTrack}
        favoriteTracks={favoriteTracks}
      />
      {playTrack !== null && (
        <Player
          track={playTrack}
          addFavoriteTrack={addFavoriteTrack}
          deleteFavoriteTrack={deleteFavoriteTrack}
          isFavoriteTrack={isFavoriteTrack}
        />
      )}
    </Router>
  );
};

export default App;
