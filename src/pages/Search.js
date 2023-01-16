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

function ArtistSearch() {
  const [searchInput, setSearchInput] = useState(""); //^ empty string
  const [accessToken, setAccessToken] = useState(""); //^ empty string
  const [artistData, setArtistData] = useState([]); //^ empty array
  const [albums, setAlbums] = useState([]); //^ empty array
  const [relatedArtists, setRelatedArtists] = useState([]); //^ empty array

  //? useEffect function to get the initial access token and not create an endless loop
  useEffect(() => {
    var param = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    };
    //! Add ERROR HANDLING to fetch later !!!!!!!!!!!!!!!!!!!!!!!!
    fetch("https://accounts.spotify.com/api/token", param)
      //? "then" catch the promise that fetch gives me
      .then((results) => results.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  //? Search
  async function search() {
    console.log(`Searched for ${searchInput}`);
    
    //? Get the artist ID
    var searchParam = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    var userSearch = await fetch(
      `${baseURI}/search?q=${searchInput}&type=track,artist,album`,
      searchParam
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArtistData(data.artists.items[0]);
        return data 
      });
     
  }
  //^ <<<<<<<<<<<<<<<<<<<<<<<<<<<< end of search() function
//   console.log(relatedArtists);

  return (
    <div>
      <Container>
      <h2>Search</h2>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="What would you like to jam?!"
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
      {/* Display the searched Artists Img and Name */}
      <Container>
        {artistData != "" && (
          <div style={styles.artistInfo} className="mx-auto text-center">
            <h2>{artistData && artistData.name}</h2>
            <div className="text-center">
              <img
                src={artistData && artistData.images[0].url}
                style={styles.artistImage}
                className="fluid rounded-circle"
              />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default ArtistSearch;

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
  relatedArtistsImg: {
    width: "150px",
    height: "150px",
    overflow: "hidden",
    borderRadius: "50%",
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
