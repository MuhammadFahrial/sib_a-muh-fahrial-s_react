import React from "react";
import External from "./External";
import ExternalCssModule from "./ExternalCssModule";
import ExternalObjectVariabel from "./ExternalObjectVariabel";
import InlineCss from "./InlineCss";
import ObjectVariabel from "./ObjectVariabel";
import StyledComponents from "./StyledComponents";

const Main = () => {
  return (
    <div>
      <InlineCss />
      <ObjectVariabel />
      <External />
      <ExternalCssModule />
      <ExternalObjectVariabel />
      <StyledComponents />
    </div>
  );
};

export default Main;
