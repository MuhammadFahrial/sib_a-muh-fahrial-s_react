import React from "react";

const Hero = () => {
  return (
    <div className="hero m-3">
      <div className="hero-image">
        <h1 className="bg-slate-400 w-36 h-36"></h1>
      </div>
      <div className="hero-text flex-col">
        <h1 className="font-bold mb-1">Hactiv8 Meetup</h1>
        <p className="mr-10">
          Location <span className="pl-8">Jakarta, Indonesia</span>
        </p>
        <p className="mr-8">
          Members <span className="pl-6">1,078</span>
        </p>
        <p className="mr-6">
          Organizers <span className="pl-4">Adhy Wiranata</span>
        </p>
        <p className="mt-5">
          <a href="" className="btn">
            Join Us
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
