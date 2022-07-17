// GlobalStyles
import { GlobalStyles } from "./styles/global-styles";
// Components
import Navbar from "./components/Navbar/Navbar";
// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/skills" />
          <Route path="/projects" />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
