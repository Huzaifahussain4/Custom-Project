import { Box } from "@mui/material";
import React from "react";
import theme from "../../utils/theme";
import { Height } from "@mui/icons-material";
import asset1 from "../../../src/assets/asset1.svg";
import { CustomButton } from "../../components/CustomButton/CustomButton";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.background.light,
      }}
    >
      <Box
        sx={{
          display: { sm: "flex", xs: "block" },
          justifyContent: "center",
          alignItems: "center",
          width: { md: "90%", xs: "100%" },
          gap: 2,
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            width: { md: "40%", sx: "100%" },
            // bgcolor: "red",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
          }}
        >
          <span
            style={{
              color: theme.palette.text.primary,
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Everything you need to launch,
            <span style={{ color: theme.palette.primary.main }}>
              {" "}
              manage,
            </span>{" "}
            and scale your TikTok Shop
            <span style={{ color: theme.palette.primary.main }}>
              {" "}
              successfully.
            </span>
          </span>

          <span
            style={{
              color: theme.palette.text.primary,
              width: "70%",
              marginTop: "20px",
            }}
          >
            TrackIt is your ultimate tool for tracking sales data across 50M+
            products on TikTok Shop. Stay ahead by monitoring top-performing
            products, creators, and videos in any category.
          </span>

          <Box sx={{ marginTop: "20px", width: "20%" }}>
            <CustomButton text={"Get Started"} />
          </Box>
        </Box>
        <Box
          sx={{
            display: { sm: "flex", xs: "none" },
            textAlign: "center",
            width: { md: "40%", sx: "100%" },
          }}
        >
          <img src={asset1} alt="" style={{ width: "80%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
