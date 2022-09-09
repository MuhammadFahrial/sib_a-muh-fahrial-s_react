import React from "react";
import Date from "../../atoms/cards/Date";
import Paragraf from "../../atoms/paragraf/Paragraf";
import Button from "../../atoms/button/Button";

const Card2 = () => {
  return (
    <>
      <div className="card1 w-72 bg-slate-300 p-4">
        <Date date="27 Oktober 2017" />
        <Paragraf text="38 JakartaJS April Meetup with BliBli" />
        <div className="pt-4">
          113 <span className="text-sm py-3 text-slate-500">went</span>
        </div>
        <div className="pt-5">
          <Button name="View" />
        </div>
      </div>
    </>
  );
};

export default Card2;
