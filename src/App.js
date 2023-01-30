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
import Search from "./pages/Search";
//? -----COMPONENTS-------------------------------------------------------------------
import Sidebar from "./components/Sidebar";
import FooterNav from "./components/FooterNav";
import Header from "./components/Header";
//? -----REACT-BOOTSTRAP--------------------------------------------------------------
import { Container, ToggleButton } from "react-bootstrap";
import Logo from "./images/workout-playlist-logo.png";

function App() {
  return (

    
    <div className="app">
      <div className="app-header">
        <Header ImgUrl={Logo} ImgAlt="PlayFit's Logo" Title="PlayFit" />
      </div>

      <div className="main-section">
        <div className="app-sidebar">
          <Sidebar ImgUrl={Logo} ImgAlt="PlayFit Logo" Title="PlayFit" />
        </div>

        <div className="app-body">
          <div className="container-lg">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/ArtistSearch" element={<ArtistSearch />} />
              <Route path="/AlbumSearch" element={<AlbumSearch />} />
              <Route path="/SongSearch" element={<SongSearch />} />
              <Route path="/Exercises" element={<Exercises />} />
            </Routes>
          </div>
        </div>
      </div>

      <div className="app-footer-nav">
        <FooterNav />
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
