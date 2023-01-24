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

const clientId = "9b8dc26145a04920ac05e65bea4a7f4a";
const clientSecret = "2596ccd0a70446a88f930e04d2c40373";
const baseURI = "https://api.spotify.com/v1";

function ArtistSearch() {
  const [searchInput, setSearchInput] = useState(""); //^ empty string
  const [accessToken, setAccessToken] = useState(""); //^ empty string
  const [artistData, setArtistData] = useState([]); //^ empty array
  const [albums, setAlbums] = useState([]); //^ empty array
  const [relatedArtists, setRelatedArtists] = useState([]); //^ empty array

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
      `${baseURI}/search?q=${searchInput}&type=artist`,
      searchParam
    )
      .then((response) => response.json())
      .then((data) => {
        setArtistData(data.artists.items[0]);
        return data.artists.items[0].id; //^ Takes the first artist found
      });

    // ^ Get request with artist ID for all of the artists albums
    var albums = await fetch(
      `${baseURI}/artists/${artistID}/albums?include_groups=album&market=US&limit=40`,
      searchParam
    )
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data.items);
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
  //^ <<<<<<<<<<<<<<<<<<<<<<<<<<<< end of search() function
  console.log(relatedArtists);

  return (
    <Container>
      <div>
        <h1 className="brand-font">Search by Artist</h1>
        <InputGroup className="mb-3" size="lg">
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
      {/* Display the searched Artists Img and Name */}
      <div>
        {artistData != "" && (
          <div className="mx-auto">
            <h2>{artistData && artistData.name}</h2>
            <div>
              <img
                src={artistData.images[0].url}
                className="artist-image fluid rounded-circle"
              />
            </div>

            <p className="brand-font h4 pt-5 pb-2">
              Here are some artists similar to {artistData.name}
            </p>
            <Row className="mx-2 row row-cols-5">
              {relatedArtists.map((artist, i) => {
                return (
                  <Figure key={i} className="text-center figure">
                    <div className="related-artists-img-container">
                      <img
                        alt="${artist.name} profile picture"
                        src={artist.images[0].url}
                        className="related-artists-img fluid rounded-circle"
                      />
                    </div>

                    <Figure.Caption>{artist.name}</Figure.Caption>
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
            <p className="brand-font pt-5 pb-2 h4">
              Check out these albums from {artistData.name}
            </p>
            <Row className="mx-2 row row-cols-6">
              {albums.map((album, i) => {
                return (
                  <Card className="card border-light mb-3">
                    <Card.Img src={album.images[0].url} />
                    <Card.Body>
                      <Card.Title className="small">{album.name}</Card.Title>
                      <Card.Text>
                        {album.release_date.substring(0, 4)}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Card.Link href={album.external_urls.spotify}>
                        Listen Now
                      </Card.Link>
                    </Card.Footer>
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