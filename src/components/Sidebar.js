import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaSearch, FaDumbbell } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo-container">
        <img src={props.ImgUrl} alt={props.ImgAlt} className="sidebar-logo" />
      </div>
      <Link to="/Home" className="sidebar-link">
        <AiFillHome className="sidebar-icon" /> Home
      </Link>
      <Link to="/ArtistSearch" className="sidebar-link">
        <FaSearch className="sidebar-icon" /> Search Artist
      </Link>
      <Link to="/AlbumSearch" className="sidebar-link">
        <FaSearch className="sidebar-icon" /> Search Album
      </Link>
      <Link to="/SongSearch" className="sidebar-link">
        <FaSearch className="sidebar-icon" /> Search Song
      </Link>
      <Link to="/Library" className="sidebar-link">
        <MdLibraryMusic className="sidebar-icon" /> Library
      </Link>
      <Link to="/Exercises" className="sidebar-link">
        <FaDumbbell className="sidebar-icon" /> Exercises
      </Link>

      <DarkModeSwitch
      checked={props.switchChecked}
      onChange={props.switchOnChange}
      size={props.switchSize}
    />

    </div>
  );
};

export default Sidebar;