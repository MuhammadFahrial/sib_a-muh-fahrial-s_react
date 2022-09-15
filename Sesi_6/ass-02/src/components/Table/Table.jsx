import React from "react";
import TableBody from "../Body/TableBody";
import Footer from "../Footer/Footer";
import TableHead from "../Head/TableHead";

const Table = () => {
  return (
    <>
      <table>
        <TableHead />
        <TableBody />
      </table>
      <Footer />
    </>
  );
};

export default Table;
