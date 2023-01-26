import React from "react";
import { useState, useEffect } from "react";
//? -----REACT-ROUTER----------------------------------------------------------------
import { HashRouter as Router, Routes, Route } from "react-router-dom";
//? -----CSS-------------------------------------------------------------------------
import "./css/App.css";
//? -----PAGES-----------------------------------------------------------------------
import Home from "./pages/Home";
import ArtistSearch from "./pages/ArtistSearch";
import SongSearch from "./pages/SongSearch";
import AlbumSearch from "./pages/AlbumSearch";
import Exercises from "./pages/Exercises";
//? -----COMPONENTS-------------------------------------------------------------------
import SpotifyLogo from "./images/spotify-remix-logo-blk.png";
import Sidebar from "./components/Sidebar";
//? -----REACT-BOOTSTRAP--------------------------------------------------------------
import { Container, ToggleButton } from "react-bootstrap";
import Logo from "./images/workout-playlist-logo.png";

import { DarkModeSwitch } from "react-toggle-dark-mode";

function App() {
  // const [isDarkMode, setDarkMode] = React.useState(false);

  // const toggleDarkMode = (checked: boolean) => {
  //   setDarkMode(checked);
  // };

  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   document.body.className = theme;
  // }, [theme]);
  return (
    <div className="app">
      <div className="app_body">
        <div className="main_section">
          <Sidebar
            ImgUrl={Logo}
            ImgAlt="Workout Playlist Logo"
          />
          <div className="body">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/ArtistSearch" element={<ArtistSearch />} />
              <Route path="/AlbumSearch" element={<AlbumSearch />} />
              <Route path="/SongSearch" element={<SongSearch />} />
              <Route path="/Exercises" element={<Exercises />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// COLORFUL COMMENTS
//! Red (!)
//? Blue (?)
//* Green (*)
//^ Yellow (^)
//& Pink (&)
//~ Purple (~)
//todo Mustard (todo)
// Grey (//)
