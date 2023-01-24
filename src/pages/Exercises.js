import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Card,
  Row
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { fetchData, searchParam } from "../utils/fetchData";

function Exercises() {
  const [searchInput, setSearchInput] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  // useEffect(() => {
  //   const fetchExercisesData = async () => {
  //     const bodyPartsData = await fetchData(
  //       "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  //       searchParam
  //     );

  //     setBodyParts(["all", ...bodyPartsData]);
  //   };

  //   fetchExercisesData();
  // }, []);

  async function handleSearch() {
    if (searchInput) {
      console.log("Searched for " + searchInput);
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises`,
        searchParam
      );
      console.log("Exercise Data below:");
      console.log(exercisesData);

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchInput) ||
          item.target.toLowerCase().includes(searchInput) ||
          item.equipment.toLowerCase().includes(searchInput) ||
          item.bodyPart.toLowerCase().includes(searchInput)
      );

      setSearchInput("");
      setExercises(searchedExercises);
      console.log(exercises);
    }
  }

  console.log("searched Exercises:");
  console.log(exercises);

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
          <Row className="mx-2 row row-cols-3">
          {exercises.map((exercise, i) => {
            return (
              <Card style={styles.card} className="card border-light mb-3">
                <Card.Img src={exercise.gifUrl} alt="Exercise display" style={styles.image} />
                <Card.Body>
                  <Card.Title className="small">{exercise.name.toUpperCase()}</Card.Title>
                  <Card.Text style={styles.link}>
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
