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
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" />
            <Route path="/skills" />
            <Route path="/projects" />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <GlobalStyles />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
