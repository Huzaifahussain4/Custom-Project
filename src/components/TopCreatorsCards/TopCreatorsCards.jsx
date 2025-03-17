import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export const TopCreatorsCards = () => {
  return (
    <Box sx={{ maxWidth: 180 }}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: "16px",
          overflow: "hidden",
          bgcolor: "transparent",
        }}
      >
        {/* Gray square at the top */}
        <Box
          sx={{
            height: 180,
            width: "100%",
            bgcolor: "#D3D3D3",
            borderRadius: "16px",
          }}
        />

        {/* Text content */}
        <Box sx={{ p: 1, mt: 1 }}>
          {/* Name */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#0A2647",
              fontSize: "18px",
            }}
          >
            Sera Cobalt
          </Typography>

          {/* ETH amount */}
          <Typography
            variant="body1"
            sx={{
              color: "#778899",
              fontSize: "16px",
              mt: 0.5,
            }}
          >
            250.8 ETH
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
