import React from "react";
// import { SidebarLinks } from "./SidebarLinks";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";

const Sidebar = (props) => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.brand}>
        <img src={props.ImgUrl} alt={props.ImgAlt} style={styles.logo} />
        <h1 style={styles.title}>{props.Title}</h1>
      </div>
      <Link to="/Home" style={styles.link}>
        <AiFillHome style={styles.icon} /> Home
      </Link>
      <Link to="/Search" style={styles.link}>
        <FaSearch style={styles.icon} /> Search
      </Link>
      <Link to="/ArtistSearch" style={styles.link}>
        <FaSearch style={styles.icon} /> Search Artist
      </Link>
      <Link to="/AlbumSearch" style={styles.link}>
        <FaSearch style={styles.icon} /> Search Album
      </Link>
      <Link to="/SongSearch" style={styles.link}>
        <FaSearch style={styles.icon} /> Search Song
      </Link>
      <Link to="/Library" style={styles.link}>
        <MdLibraryMusic style={styles.icon} /> Library
      </Link>
    </div>
  );
};

export default Sidebar;

const styles = {
  sidebar: {
    backgroundColor: "#DDFFF7",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignSelf: "center",
    padding: "25px",
  },
  brand: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "25px",
  },
  logo: {
    width: "44px",
  },
  title: {
    fontSize: "22px",
    margin: "0",
  },
  link: {
    textDecoration: "none",
    color: "black",
    padding: "5px 0",
    fontSize: "16px",
  },
  icon: {
    fontSize: "24px",
    textAlign: "center"
  },
};
