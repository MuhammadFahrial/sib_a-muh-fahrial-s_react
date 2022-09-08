import React from "react";

const Login = () => {
  const [state, setState] = React.useState("Login");

  return <a>{state}</a>;
};

export default Login;
