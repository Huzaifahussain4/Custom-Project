import React from "react";
import { Box, Typography } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import theme from "../../utils/theme";

export const CategoryCard = ({ icon, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.greenBg.main,
        borderRadius: "12px",
        padding: "16px",
        width: "190px",
        height: "120px",
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.palette.secondary.main,
          transform: "translateY(-5px)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          "& .icon": {
            color: theme.palette.primary.main,
            transform: "scale(1.1)",
          },
          "& .text": {
            color: theme.palette.text.primary,
            fontWeight: 500,
          },
        },
      }}
    >
      <Box
        sx={{
          fontSize: 40,
          color: theme.palette.primary.main,
          mb: 1,
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: "#707070",
          fontWeight: 400,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
