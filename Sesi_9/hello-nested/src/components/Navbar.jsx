import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About us</Link>
    </nav>
  );
};

export default Navbar;

// File ini akan berisi implementasi Link yang dibutuhkan untuk merubah route ( route changer )
