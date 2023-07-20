import { CssBaseline } from "@mui/material";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  window.addEventListener("scroll", reveal);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    reveals.forEach((row) => {
      var windowheight = window.innerHeight;
      var revealtop = row.getBoundingClientRect().top;
      var revealpoint = 150;
      if (revealtop < windowheight - revealpoint) {
        row.classList.add("active");
      }
    });
  }

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div sx={{ display: "flex" }} className="App" id={theme}>
        <CssBaseline />
        <NavBar theme={theme} onChange={toggleTheme} />

        <Home />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer id="Footer" />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
