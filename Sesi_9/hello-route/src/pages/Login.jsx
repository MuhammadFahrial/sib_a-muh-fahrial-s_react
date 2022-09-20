import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    localStorage.setItem("token", "login");
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login page</h1>
      <p>Lorem ipsum dolor sit.</p>
      <button className="login-button" onClick={() => handleLogin()}>
        Login
      </button>
    </div>
  );
};

export default Login;

// Di sini kita akan implementasi simulasi mekanisme login sederhana dengan langsung membuat item bernama token pada localStorage. Kemudian, kita akan redirect user ke halaman yang hendak di akses sebelum login dengan memanfaatkan nilai yang sudah di props dari ProtectedRoute Untuk studi kasus ini, halaman Login hanya akan diakses dari halaman yang Protected. Tidak ada Link khusus untuk akses halaman Login
