import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is my About page</p>
      <Link to="about-company">About the Company</Link> | <Link to="about-me">About Me</Link>
      <Outlet />
    </div>
  );
};

export default About;
