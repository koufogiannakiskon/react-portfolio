import { CssBaseline } from "@mui/material";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#d5e5de",
    },
    secondary: {
      main: "rgb(240, 248, 255)",
    },
  },
});

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
  return (
    <ThemeProvider theme={theme}>
      <div sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar className="navBar" color={theme.palette.secondary} />

        <Home />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer id="Footer" />
      </div>
    </ThemeProvider>
  );
}

export default App;
