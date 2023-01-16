import React from "react";
//? -----REACT-ROUTER----------------------------------------------------------------
import { Routes, Route } from "react-router-dom";
//? -----PAGES-----------------------------------------------------------------------
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import ArtistSearch from "./pages/ArtistSearch";
import SongSearch from "./pages/SongSearch";
import AlbumSearch from "./pages/AlbumSearch";
//? -----COMPONENTS-------------------------------------------------------------------
import SpotifyLogo from "./images/spotify_logo_blk.png";
import Sidebar from "./components/Sidebar";
//? -----REACT-BOOTSTRAP--------------------------------------------------------------
import { Container } from "react-bootstrap";
import SidebarMenu from "react-bootstrap-sidebar-menu";

function App() {
  const appTitle = "Spotify Remix";

  return (
    <div>
      <div style={styles.page}>
        <div style={styles.sidebar}>
          <Sidebar ImgUrl={SpotifyLogo} ImgAlt="Spotify Logo" Title={appTitle} />
        </div>

        <div style={styles.main}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/ArtistSearch" element={<ArtistSearch />} />
            <Route path="/AlbumSearch" element={<AlbumSearch />} />
            <Route path="/SongSearch" element={<SongSearch />} />
            <Route path="/Library" element={<Library />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

const styles = {
  page: {
    display: "flex",
  },
  sidebar: {
    width: "15vw",
  },
  main: {
    width: "75vw",
    padding: "20px 40px",
    backgroundColor: "#F5F5F5",
  },
};

// COLORFUL COMMENTS
//! Red (!)
//? Blue (?)
//* Green (*)
//^ Yellow (^)
//& Pink (&)
//~ Purple (~)
//todo Mustard (todo)
// Grey (//)
