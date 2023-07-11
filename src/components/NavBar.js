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
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const navItems = ["Aboutme", "Projects", "Contact"];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Logo />
      <Divider />
      <List className="navbar-nav">
        {navItems.map((item) => (
          <ListItem key={item} disablePadding className="nav-item">
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} className="nav-link" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav">
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
          <Logo />

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
            className="navbar-nav"
          >
            {navItems.map((item) => (
              <Link
                component={Button}
                to={`#${item}`}
                key={item}
                sx={{
                  color: "black",
                  textTransform: "none",
                }}
                className="nav-item nav-link"
              >
                {item}
              </Link>
            ))}
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
        </Drawer>
      </Box>
    </>
  );
}

export default NavBar;
