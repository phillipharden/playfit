import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Form from "../components/Form";
import '../css/Home.css';

function Home() {
  return (
    <Container>
      <div className="home full-page">
        <div className="home-header">
          <h2 className="brand-font">Welcome to Spotify Remix</h2>
        </div>
        <div className="home-body">
          <Form />
        </div>
      </div>
    </Container>
  );
}

export default Home;

// COLORFUL COMMENTS
//! Red (!)
//? Blue (?)
//* Green (*)
//^ Yellow (^)
//& Pink (&)
//~ Purple (~)
//todo Mustard (todo)
// Grey (//)
