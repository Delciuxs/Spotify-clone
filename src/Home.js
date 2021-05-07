import React from "react";
import { useEffect, useState } from "react";

import "./Home.scss";
import Track from "./Track";

const Home = ({ setPlayTrack }) => {
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    const fetchTopTracks = async () => {
      let url =
        "https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";
      let response = await fetch(url);
      let json = await response.json();
      setTopTracks(json.tracks);
    };
    fetchTopTracks();
  }, []);

  return (
    <>
      <h1 className="home-header">Top tracks of the moment</h1>
      <div className="top-tracks-container">
        {topTracks === null && <h3>Fetching tracks...</h3>}
        {topTracks !== null &&
          topTracks.map((track, i) => <Track key={i} track={track} setPlayTrack={setPlayTrack}/>)}
      </div>
    </>
  );
};

export default Home;
