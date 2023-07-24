import { Box } from "@mui/material";
import React from "react";

function Logo(props) {
  return (
    <Box
      component="img"
      sx={{
        height: 50,
        width: 50,
      }}
      alt="Logo"
      src={
        props.theme === "light"
          ? "./images/KK_black_letters.png"
          : "./images/KK_white_letters.png"
      }
    />
  );
}

export default Logo;
