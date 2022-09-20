import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRoute;

// Kita menggunakan fitur Navigate untuk melakukan navigasi ke halaman Login. Kita menggunkana hooks yang bernama useLocation untuk bisa mendapatkan lokasi terakhir sebelum diarahkan ke Login, agar setelah Login, kita akan diarahkan ke halaman yang kita tuju sebelum Login. Lokasi terakhir dikirimkan dalam bentuk props ke dalam atribut state.