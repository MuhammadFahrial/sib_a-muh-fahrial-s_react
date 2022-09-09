import React from "react";

const Explore = () => {
  const [state, setState] = React.useState("Explore");
  return <a>{state}</a>;
};

export default Explore;
