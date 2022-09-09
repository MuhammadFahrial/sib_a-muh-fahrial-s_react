import React from "react";
import Button from "../../atoms/button/Button";
import Heading from "../../atoms/heading/Heading";
import Img from "../../atoms/img/Img";
import Paragraf from "../../atoms/paragraf/Paragraf";

const Hero = () => {
  return (
    <div className="hero m-3">
      <div className="hero-image">
        <Img />
      </div>
      <div className="hero-text flex-col">
        <Heading name="Hactiv8 Meetup" />

        <div className="flex">
          <div className="left mr-6">
            <Paragraf text="Location" />
            <Paragraf text="Members" />
            <Paragraf text="Organizers" />
          </div>

          <div className="right">
            <Paragraf text="Jakarta, Indonesia" />
            <Paragraf text="1,078" />
            <Paragraf text="Adhy Wiranata" />
          </div>
        </div>
        <Button name="Join Us" />
      </div>
    </div>
  );
};

export default Hero;
