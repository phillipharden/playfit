import React from "react";
import Homepage from "./pages/Homepage";
import SpotifyLogo from "./images/spotify_logo_name_grn.png";
import Header from "./components/Header";

function App() {
  const appTitle = "Spotify API"


  return (
    <div>
      <div className="mb-5">
        <Header ImgUrl={SpotifyLogo} ImgAlt="Spotify Logo" Title={appTitle} />
      </div>
       <Homepage/>
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
