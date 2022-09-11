import Footer from "./components/organisms/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Explore from "./components/pages/explore/Explore";
import MeetUp from "./components/pages/meetup/MeetUp";
import Navigation from "./components/organisms/navbar/Navigation";

// Homework
const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-meetup" element={<MeetUp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
