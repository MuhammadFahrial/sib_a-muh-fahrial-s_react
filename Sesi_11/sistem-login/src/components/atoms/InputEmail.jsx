import React from 'react'

const InputEmail = (props) => {
  return (
    <div><input
    type="email"
    name="email"
    onChange={props.onChange}
    value={props.email}
    placeholder="Email"
    className="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
  /></div>
  )
}

export default InputEmail