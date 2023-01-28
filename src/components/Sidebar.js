import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaSearch, FaDumbbell, FaMusic } from "react-icons/fa";
import { MdLibraryMusic, MdAlbum } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "../css/Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-body">
        <div className="sidebar-logo-container">
          <img src={props.ImgUrl} alt={props.ImgAlt} className="sidebar-logo" />
        </div>
        <Link to="/Home" className="sidebar-link">
          <AiFillHome className="sidebar-icon" /> Home
        </Link>
        <Link to="/Search" className="sidebar-link">
          <FaSearch className="sidebar-icon" /> Search 
        </Link>
        <Link to="/ArtistSearch" className="sidebar-link">
          <CgProfile className="sidebar-icon" /> Search Artist
        </Link>
        <Link to="/AlbumSearch" className="sidebar-link">
          <MdAlbum className="sidebar-icon" /> Search Album
        </Link>
        <Link to="/SongSearch" className="sidebar-link">
          <FaMusic className="sidebar-icon" /> Search Song
        </Link>
        <Link to="/Exercises" className="sidebar-link">
          <FaDumbbell className="sidebar-icon" /> Exercises
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
