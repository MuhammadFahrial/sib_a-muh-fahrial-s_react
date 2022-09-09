import React from "react";
import SeeAll from "../../atoms/link/SeeAll";
import Title from "../../atoms/title/Title";
import Card1 from "../../molekuls/card1/Card1";
import Card2 from "../../molekuls/card1/Card2";
import Card3 from "../../molekuls/card1/Card3";

const Card = () => {
  return (
    <>
      <div className="past-title">
        <Title name="Past Meetups" />
        <SeeAll />
      </div>
      <div className="past-card flex mx-5 px-5 gap-5 justify-evenly flex-wrap">
        <Card1 />
        <Card2 />
        <Card3 />
        {/* <div className="card1 w-72 bg-slate-300 p-4">
          <h1 className="font-bold font-bold border-b pb-2 border-black mb-2">
            27 November 2017
          </h1>
          <p>#39 JakartaJS April Meetup with kumparan</p>
          <p className="pt-4">
            139 <span className="text-sm py-3 text-slate-500">went</span>
          </p>
          <p className="pt-5">
            <a href="" className="btn">
              View
            </a>
          </p>
        </div>  */}

        {/* <div className="card1 w-72 bg-slate-300 p-4">
          <h1 className="font-bold border-b pb-2 border-black mb-2">
            27 Oktober 2017
          </h1>
          <p>#38 JakartaJS April Meetup with BliBli</p>
          <p className="pt-4">
            113 <span className="text-sm py-3 text-slate-500">went</span>
          </p>
          <p className="pt-5">
            <a href="" className="btn mt-5">
              View
            </a>
          </p>
        </div> */}

        {/* <div className="card1 w-72 bg-slate-300 p-4">
          <h1 className="font-bold font-bold border-b pb-2 border-black mb-2">
            27 September 2017
          </h1>
          <p>#39 JakartaJS April Meetup with Hactiv8</p>
          <p className="pt-4">
            110 <span className="text-sm py-3 text-slate-500">went</span>
          </p>
          <p className="pt-5">
            <a href="" className="btn">
              View
            </a>
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Card;
