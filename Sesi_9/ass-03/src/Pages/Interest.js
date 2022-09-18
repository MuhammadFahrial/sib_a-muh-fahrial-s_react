import React from "react";
import { myInterest } from "../Details";

class Interest extends React.Component {
  render() {
    return (
      <>
        <div className="container mx-auto max-width pt-10 pb-20">
          <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            {myInterest.tagline}
          </h1>
          <p className="text-content py-8 lg:max-w-3xl">
            {myInterest.interest}
          </p>
        </div>
      </>
    );
  }
}

export default Interest;
