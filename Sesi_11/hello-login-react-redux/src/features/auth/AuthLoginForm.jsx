// Persiapkan state dan method seperti disamping.

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authLoginApi } from "../users/authSlice";

function AuthLoginForm() {
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

  // Method doSubmit digunakan untuk action form.
  const doSubmit = (event) => {
    event.preventDefault();
    dispatch(authLoginApi({ email, password }));
    setEmail("");
    setPassword("");
  };

  // Dalam fungsi return, siapkan form login yang berisi email dan password. Beserta template ketika pending, sukses login dan error login.
  return (
    <form name="loginForm" onSubmit={doSubmit}>
      <div className="form-group-collection">
        <div className="form-group">
          <label>Email :</label>
          <input
            type="email"
            name="email"
            onChange={emailChange}
            value={email}
          />
        </div>

        <div className="form-group">
          <label>Password :</label>
          <input
            type="password"
            name="password"
            onChange={passwordChange}
            value={password}
          />
        </div>
      </div>

      <input type="submit" value="Login" />

      <div className="message">
        {authState.isLoginPending && (
          <div>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"
              alt="Loading..."
            />
          </div>
        )}

        {authState.isLoginSuccess && <div>Succes.</div>}

        {authState.errorMessage && <div>{authState.errorMessage}</div>}
      </div>
    </form>
  );
}

export default AuthLoginForm;
