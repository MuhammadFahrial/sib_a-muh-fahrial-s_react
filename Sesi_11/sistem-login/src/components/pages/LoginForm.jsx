import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authLoginApi } from "../../features/auth/authSlice";
import toast, { Toaster } from "react-hot-toast";

function LoginForm() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const doSubmit = (event) => {
    event.preventDefault();
    dispatch(authLoginApi({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1 className="my-3 font-bold text-center">Login Form</h1>
      <hr />
      <form name="loginForm" onSubmit={doSubmit}>
        <div className="flex flex-col xl:mx-96 sm:mx-16">
          <div className="mb-2 mt-4">
            <input
              type="email"
              name="email"
              onChange={emailChange}
              value={email}
              placeholder="Email"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className="mb-2">
            <input
              type="password"
              name="password"
              onChange={passwordChange}
              value={password}
              placeholder="Password"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="mb-4 text-right">
            <input
              type="submit"
              value="Login"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            />
          </div>
          <div className="text-right">
            {authState.isLoginPending && (
              <div>
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"
                  alt="Loading..."
                />
              </div>
            )}

            {authState.isLoginSuccess && <div>Success.</div>}

            {authState.errorMessage && <div>{authState.errorMessage}</div>}
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
