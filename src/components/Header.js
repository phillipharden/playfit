import React from "react";
import { Container } from "react-bootstrap";

const Header = (props) => {
  return (
    <header style={styles.header}>
      <Container>
        <div style={styles.container}>
          <h1>{props.Title}</h1>
          <img src={props.ImgUrl} alt={props.ImgAlt} style={styles.logo} />
        </div>
      </Container>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    backgroundColor: "#FFFFF0",
    color: "#1fd760",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "10%",
  },
};