import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
  Figure,
} from "react-bootstrap";
import { useState, useEffect } from "react";

const appTitle = "Explore Spotify";
const clientId = "9b8dc26145a04920ac05e65bea4a7f4a";
const clientSecret = "2596ccd0a70446a88f930e04d2c40373";
const baseURI = "https://api.spotify.com/v1";

function SongSearch() {
  const [searchInput, setSearchInput] = useState(""); //^ empty string
  const [accessToken, setAccessToken] = useState(""); //^ empty string
  const [artistData, setArtistData] = useState([]); //^ empty array
  const [song, setSong] = useState([]); //^ empty array

  //^ useEffect function to get the initial access token and not create an endless loop
  useEffect(() => {
    var param = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        //^ https://developer.spotify.com/documentation/ios/guides/token-swap-and-refresh/
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    };

    //^ Add ERROR HANDLING to fetch later
    fetch("https://accounts.spotify.com/api/token", param)
      //^ "then" catch the promise that fetch gives me
      .then((results) => results.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);
  //~--------------------------------------------------------------------------------
  //^Search
  async function search() {
    console.log(`Searched for ${searchInput}`);

    //?-search artists---------------------------------------------------------------
    //^ Get the artist ID
    var searchParam = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    var artistID = await fetch(
      `${baseURI}/search?q=${searchInput}&type=track`,
      searchParam
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSong(data.tracks.items[0]);
        // setArtistData(data.artists.items[0]);
        // return data.artists.items[0].id; //^ Takes the first artist found
      });
  }
  //^ <<<<<<<<<<<<<<<<<<<<<<<<<<<< end of search() function
  console.log(song);

  return (
    <div>
      <Container>
        <h1>Search by Song</h1>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search for song..."
            type="input"
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>
      {/* Display the searched Song Img and Name */}
      <div>
        {song != "" && (
          <div style={styles.songInfo}>
            <div>
              <img
                src={song && song.album.images[0].url}
                style={styles.artistImage}
                className="fluid"
              />
            </div>
            <div style={styles.songInfoText}>
              <h2>{song && song.name}</h2>
              <p>by {song.artists[0].name}</p>
              <p>from the album {song.album.name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SongSearch;

const styles = {
  artistImage: {
    width: "250px",
    height: "250px",
  },
  artistText: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  image: {
    width: "300px",
  },
  songInfo: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  songInfoText: {
    paddingLeft: "10px",
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
