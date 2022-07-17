import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Router path="/"/>
        <Router path="/about" />
        <Router path="/contact" />
        <Router path="/skills" />
        <Router path="/projects" />
      </Routes>
    </Router>
  );
}

export default App;
