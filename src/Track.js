import React from "react";

import "./Track.scss";

const Track = ({ track, setPlayTrack }) => {
  const trackIcons = [
    <i className="fas fa-music"></i>,
    <i className="fas fa-guitar"></i>,
    <i className="fas fa-headphones"></i>,
    <i className="fas fa-compact-disc"></i>,
    <i className="fas fa-record-vinyl"></i>,
    <i className="fas fa-drum"></i>,
  ];

  return (
    <div className="track-card" onClick={() => setPlayTrack(track)}>
      <div className="image-track">
        {trackIcons[Math.floor(Math.random() * trackIcons.length)]}
      </div>
      <div className="info-track">
        <h3 className="track-name">{track.name}</h3>
        <h3 className="track-artist">{track.artistName}</h3>
      </div>
    </div>
  );
};

export default Track;
