import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function Library() {


  return (
    <div>
      <Container>
      <h1 className="brand-font">Library</h1>
      </Container>
    </div>
  );
}

export default Library;

const styles = {
  test: {
    outline: "1px solid red",
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
