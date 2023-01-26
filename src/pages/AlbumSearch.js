import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  ListGroup,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import '../css/AlbumSearch.css';

const appTitle = "Explore Spotify";
const clientId = "9b8dc26145a04920ac05e65bea4a7f4a";
const clientSecret = "2596ccd0a70446a88f930e04d2c40373";
const baseURI = "https://api.spotify.com/v1";

function AlbumSearch() {
  const [searchInput, setSearchInput] = useState(""); //^ empty string
  const [accessToken, setAccessToken] = useState(""); //^ empty string
  const [albumId, setAlbumId] = useState(""); //^ empty string
  const [album, setAlbum] = useState([]); //^ empty array
  const [tracks, setTracks] = useState([]); //^ empty array

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

    //?-search albums---------------------------------------------------------------
    //^ Get the album ID
    var searchParam = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    var albumID = await fetch(
      `${baseURI}/search?q=${searchInput}&type=album`,
      searchParam
    )
      .then((response) => response.json())
      .then((data) => {
        setAlbum(data.albums.items[0]);
        console.log(data.albums.items[0].id);
        return data.albums.items[0].id; //^ Takes the first album found
      });

    var albumTracks = await fetch(
      `${baseURI}/albums/${albumID}/tracks?include_groups=album&market=US&limit=40`,
      searchParam
    )
      .then((response) => response.json())
      .then((data) => {
        setTracks(data.items);
      });
  }
  //^ <<<<<<<<<<<<<<<<<<<<<<<<<<<< end of search() function
  console.log(tracks);

  return (
    <Container>
      <div>
        <h1 className="brand-font">Search by Album</h1>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search for an album..."
            type="input"
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                search();
              }
            }}
            onChange={(event) =>
              setSearchInput(event.target.value.toLowerCase())
            }
          />
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </div>

      {/* Display the searched Album Img and Name */}
      <div>
        {album != "" && (
          <div>
            <img
              src={album && album.images[0].url}
              className="album-image fluid"
            />
            <p className="h3">{album && album.name}</p>
            <p>{album.artists[0].name}</p>
          </div>
        )}
      </div>
      {album != "" && (
        <div>
          <h2 className="brand-font h4">Album Tracks</h2>
          <ListGroup className="mt-3">
            {tracks.map((track, i) => {
              return (
                <ListGroup.Item>
                    <p className="h6">
                      {track.track_number}. {track.name}
                    </p>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      )}
    </Container>
  );
}

export default AlbumSearch;