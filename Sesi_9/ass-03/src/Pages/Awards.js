import React from "react";
import Award from "../Components/Award";
import { awardDetails } from "../Details";

const Awards = () => {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Awards
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            awardDetails.map(({ title, image, description }) => (
              <Award title={title} image={image} description={description} />
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default Awards;
