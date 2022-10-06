import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="m-10">
      <div className="mb-4 mt-6">
        <Link
          to="/"
          className="px-4 py-2 bg-green-600 text-white rounded"
          role="button"
        >
          Back to Home
        </Link>
      </div>
      <div>
        <h1 className="font-bold text-2xl mb-2 font-sans">About Me</h1>
        <table>
          <tbody>
            <tr>
              <td className="">Nama</td>
              <td> : </td>
              <td className="font-bold pl-4">A Muh Fahrial S</td>
            </tr>
            <tr>
              <td>Code</td>
              <td> : </td>
              <td className="font-bold pl-4">RCTN-KS05-012</td>
            </tr>
            <tr>
              <td>Hobi</td>
              <td> : </td>
              <td className="font-bold pl-4">None</td>
            </tr>
            <tr>
              <td className="pr-6">Assigment</td>
              <td> : </td>
              <td className="font-bold pl-4"> 1-3 (Done)</td>
            </tr>
            <tr>
              <td className="pr-6">Sesi</td>
              <td> : </td>
              <td className="font-bold pl-4"> 1-13 (Done)</td>
            </tr>
          </tbody>
        </table>

        {/* <p>
          Name : <span className="font-bold">A Muh Fahrial S</span>
        </p>
        <p>
          Code : <span className="font-bold">RCTN-KS05-012</span>
        </p>
        <p>
          Hobby : <span className="font-bold">Masih Belum di temukan</span>
        </p> */}
      </div>
      {/* <div>
        <h1>
          Sesi 1 - 13 : ( <span className="font-bold">DONE</span> )
        </h1>
      </div> */}
    </div>
  );
};

export default About;
