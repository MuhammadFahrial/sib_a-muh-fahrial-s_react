import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="m-10">
        <div>
          <h1 className="font-bold text-2xl text-center mb-6 font-sans">
            Why Do We Need Test ?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            libero corrupti, exercitationem distinctio nesciunt debitis natus,
            deserunt quae ipsum officia, qui autem esse sunt commodi unde earum
            quas modi aspernatur asperiores nihil nulla explicabo at! Iste animi
            harum iusto quod distinctio non vel provident repudiandae! Deserunt
            facere nostrum, nulla dignissimos molestias dolor laboriosam iusto
            possimus commodi aut quam et voluptates esse officiis cum odit
            quaerat. Praesentium atque rerum iusto molestias, ex vitae neque?
            Fugit, accusamus laudantium itaque recusandae animi saepe quia.
            Perferendis officiis quis, nulla perspiciatis, repellat corporis
            fugiat ratione nostrum quidem repellendus reiciendis ipsum sapiente
            commodi delectus deserunt culpa.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/users"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white mr-4"
            role="button"
          >
            Users List
          </Link>

          <Link
            to="/about"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white"
            role="button"
          >
            About
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
