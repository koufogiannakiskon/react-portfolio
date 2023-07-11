import { Box } from "@mui/material";
import React from "react";

function Logo() {
  return (
    <Box
      component="img"
      sx={{
        height: 50,
        width: 50,
      }}
      alt="Logo"
      src="KK_black_letters.png"
    />
  );
}

export default Logo;
