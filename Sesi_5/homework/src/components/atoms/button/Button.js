import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="mt-3 bg-sky-700 py-1 px-4 text-white">
        {props.name}
      </button>
    </>
  );
};

export default Button;
