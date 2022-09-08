import React from "react";
import CreateMeetup from "../../atoms/link/CreateMeetup";
import Explore from "../../atoms/link/Explore";
import Login from "../../atoms/link/Login";
import Qtemu from "../../atoms/link/Qtemu";

const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <div className="nav-item">
          <Qtemu />
          <CreateMeetup />
          <Explore />
        </div>
        <div className="nav-login">
          <Login />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
