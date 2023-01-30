import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaSearch, FaDumbbell, FaMusic } from "react-icons/fa";
import { MdAlbum } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "../css/FooterNav.css";

const FooterNav = () => {
  return (
    <div className="footer-nav">
      <div className="footer-nav-body">
        <Link to="/Home" className="footer-nav-link">
          <AiFillHome className="footer-nav-icon" /><p className="footer-nav-text">Home</p>
        </Link>
        <Link to="/ArtistSearch" className="footer-nav-link">
          <CgProfile className="footer-nav-icon" /><p className="footer-nav-text">Artists</p>
        </Link>
        <Link to="/AlbumSearch" className="footer-nav-link">
          <MdAlbum className="footer-nav-icon" /><p className="footer-nav-text">Albums</p>
        </Link>
        <Link to="/SongSearch" className="footer-nav-link">
          <FaMusic className="footer-nav-icon" /><p className="footer-nav-text">Songs</p>
        </Link>
        <Link to="/Exercises" className="footer-nav-link">
          <FaDumbbell className="footer-nav-icon" /><p className="footer-nav-text">Exercises</p>
        </Link>

      </div>
    </div>
  );
};

export default FooterNav;