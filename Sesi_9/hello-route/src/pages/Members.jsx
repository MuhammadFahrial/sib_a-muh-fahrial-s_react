import React from "react";
import { Link, Outlet } from "react-router-dom";

const Members = () => {
  return (
    <div>
      <h1>Members pages</h1>
      <p>Select a member to show</p>
      <Link to="John Doe">John Doe</Link> | <Link to="Doe Jane">Doe Jane</Link>
      <Outlet />
    </div>
  );
};

export default Members;

// Seringkali kita membutuhkan alamat URL yang dinamis dengan menggunakan parameter. Kita bisa menggunakan format :<nama params> untuk melakukan hal ini dan membaca value dari <nama params> tersebut. Misalkan untuk halaman profil member dari halaman members
