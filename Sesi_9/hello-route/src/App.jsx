import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutCompany from "./pages/AboutCompany";
import AboutMe from "./pages/AboutMe";
import Members from "./pages/Members";
import Member from "./pages/Member";
import Item from "./pages/Item";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Items from "./pages/Items";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="about-company" element={<AboutCompany />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>
        <Route path="/members" element={<Members />}>
          <Route path=":memberName" element={<Member />} />
        </Route>
        <Route
          path="/items"
          element={
            <ProtectedRoute>
              <Items />
            </ProtectedRoute>
          }
        >
          <Route path=":itemId" element={<Item />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

// Di sini kita melakukan praktek pengiriman props ke dalam element Route via atribut element

// Pada App.js, kita menambahkan Route-Route baru seperti yang terlihat pada contoh. Perhatikan bahwa kita memberikan hanya :memberName pada path yang akan mengakses page Member
