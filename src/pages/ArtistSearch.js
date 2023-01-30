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
import "../css/ArtistSearch.css";
import ErrorMessage from "../components/ErrorMessage";

const clientId = "9b8dc26145a04920ac05e65bea4a7f4a";
const clientSecret = "2596ccd0a70446a88f930e04d2c40373";
const baseURI = "https://api.spotify.com/v1";

function ArtistSearch() {
  const [searchInput, setSearchInput] = useState(""); //^ empty string
  const [accessToken, setAccessToken] = useState(""); //^ empty string
  const [artistData, setArtistData] = useState([]); //^ empty array
  const [albums, setAlbums] = useState([]); //^ empty array
  const [relatedArtists, setRelatedArtists] = useState([]); //^ empty array
  const [noResultsFound, setNoResultsFound] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(null);

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

    fetch("https://accounts.spotify.com/api/token", param)
      //^ "then" catch the promise that fetch gives me
      .then((results) => results.json())
      .then((data) => setAccessToken(data.access_token))
      .catch((results) => {
        console.error(results);
      });
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
      `${baseURI}/search?q=${searchInput}&type=artist`,
      searchParam
    )
      .then((response) => response.json())
      .then((data) => {
        setArtistData(data.artists.items[0]);
        return data.artists.items[0].id;
      })
    // ^ Get request with artist ID for all of the artists' albums
    if (!error) {
      var albums = await fetch(
        `${baseURI}/artists/${artistID}/albums?include_groups=album&market=US&limit=40`,
        searchParam
      )
        .then((response) => response.json())
        .then((data) => {
          setAlbums(data.items);
        })
        .catch((error) => {
          console.log(error.message);
          setErrorMessage(`Sorry, no results were found. Please try again.`);
          setError(true);
        });

      //^ GET Related Artists
      var relatedArtists = await fetch(
        `${baseURI}/artists/${artistID}/related-artists`,
        searchParam
      )
        .then((response) => response.json())
        .then((data) => {
          setRelatedArtists(data.artists);
        });
    }
  }
  //^ <<<<<<<<<<<<<<<<<<<<<<<<<<<< end of search() function
  //^ <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  console.log(relatedArtists);
  //^ <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  return (
    <Container className="margin-bottom-custom">
      <div>
        <h1 className="brand-font">Search by Artist</h1>
        <InputGroup className="input-group my-3" size="sm">
          <FormControl
            placeholder="Search for an artist..."
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
      </div>
      {error && <ErrorMessage Message={errorMessage} />}
      {/* Display the searched Artist Image and Name */}
      <div>
        {artistData != "" && (
          <div className="mx-auto">
            <h2 className="text-center my-3">
              {artistData && artistData.name}
            </h2>
            <div className="main-artist artist-img-container mx-auto">
              <img src={artistData.images[0].url} className="artist-img" />
            </div>

            <p className="brand-font h4 py-2 my-3 text-center">
              Here are some artists similar to {artistData.name}...
            </p>
            <Row className="mx-2 row">
              {relatedArtists.map((artist, i) => {
                return (
                  <Figure
                    key={i}
                    className="text-center my-3 pb-2 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
                  >
                    <div className="mx-auto related-artist artist-img-container">
                      <img
                        alt="Profile picture for ${artist.name}"
                        src={artist.images[0].url}
                        className="artist-img"
                      />
                    </div>
                    <Figure.Caption className="artist-name">
                      {artist.name}
                    </Figure.Caption>
                  </Figure>
                );
              })}
            </Row>
          </div>
        )}
      </div>

      <div>
        {albums != "" && (
          <div>
            <p className="text-center brand-font pt-5 pb-2 h4 my-3">
              Check out these albums from {artistData.name}
            </p>
            <Row className="row m-auto">
              {albums.map((album, i) => {
                return (
                  <Card className="album-card my-3 col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                    <Card.Img 
                    src={album.images[0].url} 
                    alt="Album cover for {album.name}"
                    />
                    <Card.Body>
                      <Card.Title className="small">{album.name}</Card.Title>
                      <Card.Text>
                        {album.release_date.substring(0, 4)}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </Row>
          </div>
        )}
      </div>
    </Container>
  );
}

export default ArtistSearch;
