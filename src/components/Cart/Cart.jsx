import { Box } from "@mui/material";
import React from "react";
import theme from "../../utils/theme";
import { CustomButton, CustomStyleButton } from "../CustomButton/CustomButton";

export const CustomCart = ({ img, title, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        width: { md: "25%", sm: "60%", xs: "80%" },
        // border: "1px solid gray",
        padding: 2,
        borderRadius: 4,
        height: { md: "300px", xs: "auto" }, // Ensure all cards have equal height
        minHeight: "350px",
        backgroundColor: theme.palette.greenBg.main,
        // overflow: "hidden",
      }}
    >
      {/* <Box sx={{ width: "80%" }}>
        <img src={img} alt="" style={{ width: "100%", height: "200px" }} />
      </Box> */}
      <Box
        sx={{
          fontWeight: "800",
          fontSize: "30px",
          color: theme.palette.primary.main,
          pt: "10px",
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
        <CustomStyleButton
          text="Learn More"
          backgroundColor={theme.palette.primary.main}
          color={theme.palette.background.default}
        />
      </Box>
    </Box>
  );
};
