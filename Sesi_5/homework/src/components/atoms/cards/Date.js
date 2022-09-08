import React from "react";

const Date = (props) => {
  return (
    <>
      <h1 className="font-bold font-bold border-b pb-2 border-black mb-2">
        {props.date}
      </h1>
    </>
  );
};

export default Date;
