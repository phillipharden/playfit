import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Form from "../components/Form";
import '../css/Home.css';
import HeroImage from "../images/hero.gif";

function Home() {
  return (
    <Container>
      <div className="home full-page">
        <div className="home-header">
          <h2 className="brand-font">Welcome to PlayFit</h2>
        </div>
        <div className="home-body">
          <p className="text_block">
          Here at PlayFit you can search for your favorite artists and exercises in one app! Tracking features are on their way! For now enjoy discovering your favorite music and motions!
          </p>
          <img src={HeroImage} alt="Image of a woman listening to music and exercising." className="hero_img" />
          
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
