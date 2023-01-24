import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Card,
  Row,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { fetchData, searchParam } from "../utils/fetchData";

function Exercises() {
  const [searchInput, setSearchInput] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  async function handleSearch() {
    if (searchInput) {
      console.log("Searched for " + searchInput);
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises`,
        searchParam
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchInput) ||
          item.target.toLowerCase().includes(searchInput) ||
          item.equipment.toLowerCase().includes(searchInput) ||
          item.bodyPart.toLowerCase().includes(searchInput)
      );

      setExercises(searchedExercises);
      console.log(exercises);
    }
  }

  return (
    <Container>
      <h1 className="brand-font">Exercises</h1>
      <InputGroup className="mb-3" size="lg">
        <FormControl
          placeholder="Search for an exercise..."
          type="input"
          onKeyPress={(event) => {
            if (event.key == "Enter") {
              handleSearch();
            }
          }}
          onChange={(event) => setSearchInput(event.target.value.toLowerCase())}
        />
        <Button onClick={handleSearch}>Search</Button>
      </InputGroup>

      {exercises != "" && (
        <div>
          <Row className="mx-2 row row-cols-5">
            {exercises.map((exercise, i) => {
              return (
                <Card className="card border-light mb-3 card-style">
                  <Card.Img
                    src={exercise.gifUrl}
                    alt="Exercise display"
                  />
                  <Card.Body>
                    <Card.Title className="small">
                      {exercise.name.toUpperCase()}
                    </Card.Title>
                    <Card.Text className="card-text">
                      This exercise targets the {exercise.target}.
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </div>
      )}
    </Container>
  );
}

export default Exercises;