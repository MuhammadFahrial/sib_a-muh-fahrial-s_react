import React from "react";

const CreateMeetup = () => {
  const [state, setState] = React.useState("Create Meetup");

  return <a>{state}</a>;
};

export default CreateMeetup;
