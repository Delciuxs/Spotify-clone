import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Home from "./Home";
import Search from "./Search";
import Favorites from "./Favorites";

import "./Content.scss";

const Content = ({
  setPlayTrack,
  favoriteTracks,
}) => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact>
          <Home setPlayTrack={setPlayTrack} />
        </Route>
        <Route path="/search">
          <Search setPlayTrack={setPlayTrack} />
        </Route>
        <Route path="/favorites">
          <Favorites
            setPlayTrack={setPlayTrack}
            favoriteTracks={favoriteTracks}
          />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Content;
