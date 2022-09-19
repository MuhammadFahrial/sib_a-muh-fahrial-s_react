import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Projects from "./Pages/Projects";
// import Technologies from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Interest from "./Pages/Interest";
import Awards from "./Pages/Awards";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
        </Route>
        <Route path="/interest" element={<Interest />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
