import React from "react";
//? -----REACT-ROUTER----------------------------------------------------------------
import { Routes, Route } from "react-router-dom";
//? -----CSS-------------------------------------------------------------------------
import "./App.css";
//? -----PAGES-----------------------------------------------------------------------
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import ArtistSearch from "./pages/ArtistSearch";
import SongSearch from "./pages/SongSearch";
import AlbumSearch from "./pages/AlbumSearch";
import Exercises from "./pages/Exercises";
//? -----COMPONENTS-------------------------------------------------------------------
import SpotifyLogo from "./images/spotify-remix-logo-blk.png";
import Sidebar from "./components/Sidebar";
//? -----REACT-BOOTSTRAP--------------------------------------------------------------
import { Container } from "react-bootstrap";
import SidebarMenu from "react-bootstrap-sidebar-menu";

function App() {

  return (
    <div className="page full-page">
      <div>
        <Sidebar
          className="sidebar-main"
          ImgUrl={SpotifyLogo}
          ImgAlt="Spotify Logo"
        />
      </div>
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ArtistSearch" element={<ArtistSearch />} />
          <Route path="/AlbumSearch" element={<AlbumSearch />} />
          <Route path="/SongSearch" element={<SongSearch />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/Exercises" element={<Exercises />} />
        </Routes>
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
