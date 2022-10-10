import React from "react";

const InputPassword = (props) => {
  return (
    <div>
      <input
        type="password"
        name="password"
        onChange={props.onChange}
        value={props.password}
        placeholder="Password"
        className="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      />
    </div>
  );
};

export default InputPassword;
