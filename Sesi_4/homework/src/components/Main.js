import React from "react";

const Main = () => {
  return (
    <>
      <h1 className="font-bold mx-3 my-2">Next Meetup</h1>
      <div className="next-meetup mx-9">
        <div className="text-content">
          <p>Awesome meetup and event</p>
          <p className="text-sm py-3 text-slate-500">25 january 2019</p>
          <p>Hello, Javascript & Node.js Ninjas!</p>
          <p>
            Get ready for our monthly meetup JakartaJS! This will be our fifth
            meetup of 2018!
          </p>
          <p>
            The meetup format will contain some short stories and technical
            talks.
          </p>
          <p>
            If you have a short announcement you'd like to share with the
            audience, you may do so during open mic announcements.
          </p>
          <p className="py-3">
            Remember to bring a photo ID to get through building security.
          </p>
          <p>-----</p>
          <p className="py-3">See you there!</p>
          <p>
            Best,Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
          </p>
        </div>
      </div>

      <h1 className="font-bold mx-3 my-2">About Meetup</h1>
      <div className="about-meetup mx-9">
        <p className="py-1">
          Come and meet other developers interested in the Javascript and It's
          Library in the Greater Jakarta area.
        </p>
        <p>
          Twitter : <a href="">@jakartaJS </a>and we use the hastag #jakartajs
        </p>
      </div>

      <div className="member-title">
        <h1 className="font-bold">Members</h1>
        <a href="" className="mr-6">
          See all
        </a>
      </div>

      <div className="members mx-9">
        <h1 className="h-20 w-20 bg-slate-400 rounded-full"></h1>
        <div className="member-text">
          <p>Organizers</p>
          <p>
            Adhy Wiranata <span className="pl-9">4 others.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
