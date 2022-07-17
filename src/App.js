// CSS
import "./App.css";
// Components
import Navbar from "./components/Navbar/Navbar";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/about" />
        <Route path="/contact" />
        <Route path="/skills" />
        <Route path="/projects" />
      </Routes>
    </Router>
  );
}

export default App;
