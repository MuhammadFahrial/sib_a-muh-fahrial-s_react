import React from "react";
import Date from "../../atoms/cards/Date";
import Paragraf from "../../atoms/paragraf/Paragraf";
import Button from "../../atoms/button/Button";

const Card3 = () => {
  return (
    <>
      <div className="card1 w-72 bg-slate-300 p-4">
        <Date date="27 September 2017" />
        <Paragraf text="#39 JakartaJS April Meetup with Hactiv8" />
        <div className="pt-4">
          110 <span className="text-sm py-3 text-slate-500">went</span>
        </div>
        <div className="pt-5">
          <Button name="View" />
        </div>
      </div>
    </>
  );
};

export default Card3;
