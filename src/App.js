// GlobalStyles
import { GlobalStyles } from "./styles/global-styles";
// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
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

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" />
            <Route path="/skills" />
            <Route path="/projects" />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <About/>
          <GlobalStyles />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
