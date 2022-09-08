import React from "react";
import Date from "../../atoms/cards/Date";
import Paragraf from "../../atoms/paragraf/Paragraf";
import Button from "../../atoms/button/Button";

const Card1 = () => {
  return (
    <>
      <div className="card1 w-72 bg-slate-300 p-4">
        <Date date="27 November 2017" />
        <Paragraf text="#39 JakartaJS April Meetup with kumparan" />
        <div className="pt-4">
          139 <span className="text-sm py-3 text-slate-500">went</span>
        </div>
        <div className="pt-5">
          <Button name="View" />
        </div>
      </div>
    </>
  );
};

export default Card1;
