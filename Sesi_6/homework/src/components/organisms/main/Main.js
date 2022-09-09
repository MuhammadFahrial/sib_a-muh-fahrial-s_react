import React from "react";
import SeeAll from "../../atoms/link/SeeAll";
import Paragraf from "../../atoms/paragraf/Paragraf";
import Title from "../../atoms/title/Title";

const Main = () => {
  return (
    <>
      <Title name="Next Meetup" />
      <div className="next-meetup mx-9">
        <div className="text-content">
          <Paragraf text="Awesome meetup and event" />
          <div className="text-sm py-3 text-slate-500">
            <Paragraf text="25 january 2019" />
          </div>
          <Paragraf text="Hello, Javascript & Node.js Ninjas!" />
          <Paragraf
            text="Get ready for our monthly meetup JakartaJS! This will be our fifth
            meetup of 2018!"
          />
          <Paragraf
            text="The meetup format will contain some short stories and technical
            talks."
          />
          <Paragraf
            text="If you have a short announcement you'd like to share with the
            audience, you may do so during open mic announcements."
          />
          <div className="py-3">
            <Paragraf text=" Remember to bring a photo ID to get through building security." />
          </div>
          <Paragraf text="-----" />
          <div className="py-3">
            <Paragraf text="See you there!" />
          </div>
          <Paragraf text="Best,Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers" />
        </div>
      </div>

      <Title name="About Meetup" />
      <div className="about-meetup mx-9">
        <Paragraf
          text="Come and meet other developers interested in the Javascript and It's
          Library in the Greater Jakarta area."
        />
        <p>
          Twitter : <a href="">@jakartaJS </a>and we use the hastag #jakartajs
        </p>
      </div>

      <div className="member-title">
        <Title name="Members" />
        <SeeAll/>
      </div>

      <div className="members mx-9">
        <h1 className="h-20 w-20 bg-slate-400 rounded-full"></h1>
        <div className="member-text">
          <Paragraf text="Organizers" />
          <p>
            Adhy Wiranata <span className="pl-9">4 others.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
