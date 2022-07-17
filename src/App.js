// CSS
import "./App.css";
// Components
import Navbar from "./components/Navbar/Navbar";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/skills" />
        <Route path="/projects" />
      </Routes>
    </Router>
  );
}

export default App;
