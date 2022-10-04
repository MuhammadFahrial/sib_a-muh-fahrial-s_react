import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-80 ml-4">
        <div>
          <h1 className="font-bold">why do we need test ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio neque
            labore ipsa excepturi nam dicta eaque consequuntur pariatur nobis
            nulla!
          </p>
        </div>

        <div className="mt-6">
          <Link
            to="/users"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white"
            role="button"
          >
            Users List
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
