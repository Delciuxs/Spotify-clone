import React from "react";
import { useRef, useState } from "react";

import Track from "./Track";

import "./Search.scss";

const Search = ({ setPlayTrack }) => {
  const inputRef = useRef();
  const [searchedTracks, setSearchedTracks] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    const queryString = inputRef.current.value;
    let baseURL = "https://api.napster.com";
    let key = "apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";
    let query = `query=${queryString}`;
    let url = baseURL + `/v2.2/search/verbose?${key}&${query}`;
    if (queryString !== "" && queryString.length > 0) {
      let response = await fetch(url);
      let json = await response.json();
      setSearchedTracks(json.search.data.tracks);
    }
  };

  return (
    <>
      <div className="search-header">
        <h1>Search</h1>
        <form onSubmit={handleSearch}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Artist, songs, podcasts"
          />
        </form>
      </div>
      <div className="search-content">
        {searchedTracks !== null &&
          searchedTracks.map((track, i) => (
            <Track key={i} track={track} setPlayTrack={setPlayTrack} />
          ))}
      </div>
    </>
  );
};

export default Search;
