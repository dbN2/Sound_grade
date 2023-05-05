import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/top-rated">Top Rated</Link>
        </li>
      
        <li>
          <Link to="/genre/rock">Rock</Link>
        </li>
        <li>
          <Link to="/genre/pop">Pop</Link>
        </li>
        <li>
          <Link to="/genre/electronic">Electronic</Link>
        </li>
        <li>
          <Link to="/genre/other">Other Genres</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

