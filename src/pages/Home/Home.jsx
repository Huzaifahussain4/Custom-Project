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
        position: "relative",
        width: "100%",
        height: "100%",
        // backgroundColor: "white",
        backgroundImage:
          "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
        backgroundSize: "6rem 4rem",
        zIndex: -1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          background:
            "radial-gradient(circle 500px at 50% 200px, #d4e9f4, transparent)",
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          display: { sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          width: { md: "90%", xs: "100%" },
          gap: 2,
        }}
      >
        <Box
          sx={{
            textAlign: { md: "start", xs: "center" },
            width: { md: "40%", sm: "80%", xs: "100%" },
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { md: "start", xs: "center" },
          }}
        >
          <Box
            sx={{
              color: theme.palette.text.primary,
              fontSize: "30px",
              fontWeight: "bold",
              display: "inline",
              marginLeft: { sm: "0px", xs: "15px" },
              marginRight: { sm: "0px", xs: "15px" },
            }}
          >
            Everything you need to launch,
            <Box sx={{ color: theme.palette.primary.main, display: "inline" }}>
              {" "}
              manage,
            </Box>{" "}
            and scale your TikTok Shop
            <Box sx={{ color: theme.palette.primary.main, display: "inline" }}>
              {" "}
              successfully.
            </Box>
          </Box>

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

          <Box sx={{ marginTop: "20px", width: "30%" }}>
            <CustomButton text={"Get Started"} />
          </Box>
        </Box>

        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            textAlign: "center",
            width: { md: "50%", sm: "50%", xs: "100%" },
            height: { md: "400px", sm: "300px", xs: "300px" },
          }}
        >
          <img src={asset1} alt="" style={{ width: "100%", height: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
