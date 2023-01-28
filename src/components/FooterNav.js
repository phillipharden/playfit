import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaSearch, FaDumbbell } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import "../css/FooterNav.css";

const FooterNav = () => {
  return (
    <div className="footer_nav">
      <div className="footer_nav_body">
        <Link to="/Home" className="footer_nav_link">
          <AiFillHome className="footer_nav_icon" /> Home
        </Link>
        <Link to="/ArtistSearch" className="footer_nav_link">
          <FaSearch className="footer_nav_icon" /> Artist
        </Link>
        <Link to="/AlbumSearch" className="footer_nav_link">
          <FaSearch className="footer_nav_icon" /> Album
        </Link>
        <Link to="/SongSearch" className="footer_nav_link">
          <FaSearch className="footer_nav_icon" /> Song
        </Link>
        <Link to="/Exercises" className="footer_nav_ink">
          <FaDumbbell className="footer_nav_icon" /> Exercises
        </Link>
      </div>
    </div>
  );
};

export default FooterNav;