import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

function Footer() {
  return (
    <Paper className="footer">
      <Container maxWidth="lg">
        <Box
className="footer_box"
        >
          <Typography>© 2022 Copyright | Made with </Typography>
          <FavoriteSharpIcon fontSize="small" sx={{ color: "red" }} />{" "}
          <Typography> by me.</Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default Footer;
