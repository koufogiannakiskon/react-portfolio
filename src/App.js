import { CssBaseline } from "@mui/material";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d5e5de",
    },
    secondary: {
      main: "#d5e5de",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar className="navBar" color={theme.palette.secondary} />

        <Home id="Home" />
        <AboutMe id="Aboutme" />
        <Projects id="Projects" />
        <Contact id="Contact" />
      </div>
    </ThemeProvider>
  );
}

export default App;
