import React from "react";
import Logo from "./Logo";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggle from "./ThemeToggle";

const drawerWidth = 240;
const navItems = ["About me", "Projects", "Contact"];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link component={Button} href="#Home">
        <Logo theme={props.theme} />
      </Link>
      <Divider />
      <List className="drawer_nav">
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              component={Button}
              href={`#${item}`}
              sx={{
                color: "black",
                textTransform: "none",
              }}
              className=" drawer_navlink"
            >
              {item}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" className="navBar">
        <Toolbar
          sx={{
            display: { sm: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link component={Button} href="#Home">
            <Logo theme={props.theme} />
          </Link>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
            className="navbar-nav"
          >
            {navItems.map((item) => (
              <Link
                component={Button}
                key={item}
                href={`#${item}`}
                sx={{
                  color: "black",
                  textTransform: "none",
                }}
                className="nav-item nav-link"
              >
                {item}
              </Link>
            ))}
            <ThemeToggle theme={props.theme} onChange={props.onChange} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
          <ThemeToggle theme={props.theme} onChange={props.onChange} />
        </Drawer>
      </Box>
    </>
  );
}

export default NavBar;
