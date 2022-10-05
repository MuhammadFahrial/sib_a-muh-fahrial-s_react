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
        <p>
          Name <span className="font-bold">A Muh Fahrial S</span>
        </p>
        <p>
          Code <span className="font-bold">RCTN-KS05-012</span>
        </p>
        <p>
          Hobby <span className="font-bold">...</span>
        </p>
      </div>
      <div>
        <h1>
          Sesi 1 - 12 ( <span className="font-bold">DONE</span> )
        </h1>
      </div>
    </div>
  );
};

export default About;
