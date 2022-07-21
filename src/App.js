// GlobalStyles
import { GlobalStyles } from "./styles/global-styles";
// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// styled
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Home />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" />
            <Route path="/skills" />
            <Route path="/projects" />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes> */}
          <About />
          <Skills />
          <Projects />
          <Contact />
          <GlobalStyles />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
