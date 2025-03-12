import { Box } from "@mui/material";
import React from "react";
import theme from "../../utils/theme";
import { CustomButton } from "../CustomButton/CustomButton";

export const CustomCart = ({ img, title, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 2,
        width: { md: "30%", sm: "60%", xs: "80%" },
        border: "1px solid gray",
        padding: 2,
        borderRadius: 2,
        height: { md: "550px", xs: "auto" }, // Ensure all cards have equal height
        minHeight: "450px",
        // overflow: "hidden",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <img src={img} alt="" style={{ width: "100%", height: "200px" }} />
      </Box>
      <Box
        sx={{
          fontWeight: "bold",
          fontSize: "30px",
          color: theme.palette.primary.main,
        }}
      >
        {title}
      </Box>
      <Box sx={{ color: theme.palette.text.secondary }}>{description}</Box>

      <Box
        sx={{
          mt: "auto",
          pb: "10px",
          display: "flex",
          justifyContent: "flex-end",
          width: { md: "40%", sm: "50%", xs: "60%" },
        }}
      >
        <CustomButton text="Learn More" />
      </Box>
    </Box>
  );
};
