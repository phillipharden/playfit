import React from "react";
import { Container } from "react-bootstrap";
import "../css/Header.css";

const Header = (props) => {
  return (
      <Container className="header_container">
        <header>
          <img src={props.ImgUrl} alt={props.ImgAlt} className="header_logo" />
          <h1 className="brand_font header_title">{props.Title}</h1>
        </header>
      </Container>
  );
};

export default Header;
