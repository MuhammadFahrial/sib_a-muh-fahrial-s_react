import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authLoginApi } from "../../features/auth/authSlice";
import reactImgLogin from "../../assets/rafiki.svg";
import toast, { Toaster } from "react-hot-toast";
import Button from "../atoms/Button";
import InputEmail from "../atoms/InputEmail";
import InputPassword from "../atoms/InputPassword";

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
      <div className="w-screen h-screen flex justify-center">
        <div className="flex flex-row justify-center items-center">
          <div>
            <img src={reactImgLogin} alt="as" className="w-96 " />
          </div>
          <div>
            <h1 className="py-2 text-center bg-black/60 text-white text-sm rounded">
              Login
            </h1>
            <form name="loginForm" onSubmit={doSubmit}>
              <div className="flex flex-col ">
                <div className="mb-2 mt-4">
                  <InputEmail onChange={emailChange} email={email} />
                </div>

                <div className="mb-2">
                  <InputPassword
                    onChange={passwordChange}
                    password={password}
                  />
                </div>
                <div className="mb-4 text-right">
                  <Button />
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

                  {authState.errorMessage && (
                    <div>{authState.errorMessage}</div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
