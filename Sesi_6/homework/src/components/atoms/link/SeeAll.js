import React from "react";

const SeeAll = () => {
  const [state, setState] = React.useState("See all");

  return <a>{state}</a>;
};

export default SeeAll;
