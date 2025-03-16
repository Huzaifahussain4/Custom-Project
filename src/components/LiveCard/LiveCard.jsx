import { Box } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import theme from "../../utils/theme";
import { CustomButton, CustomStyleButton } from "../CustomButton/CustomButton";

export const LiveCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: { md: "19%", sm : "40%", xs: "80%" },
        backgroundColor: theme.palette.background.default,
        // color: "white",
        p: 2,
        borderRadius: 4,
        border: "1px solid lightGray",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Box sx={{ fontSize: "50px" }}> */}
          <AccountCircleIcon sx={{ fontSize: "40px" }} />
          {/* </Box> */}
          <Box>Profile Name</Box>
        </Box>
        <Box>
          <IconButton aria-label="primary">
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "250px",
          backgroundColor: "lightgray",
          mt: 1,
          borderRadius: 2,
        }}
      ></Box>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ mt: 2, fontSize: "20px", width: "100%", textAlign: "left" }}>
          Product Name
        </Box>
        <Box
          sx={{
            mt: 1,
            fontSize: "20px",
            fontWeight: "800",
            width: "100%",
            textAlign: "left",
            color: theme.palette.primary.main,
          }}
        >
          100$
        </Box>
        <Box sx={{ mt: 2 }}>
          <CustomStyleButton
            backgroundColor={theme.palette.primary.main}
            color={theme.palette.background.default}
            text={"Buy Now"}
          />
        </Box>
      </Box>
    </Box>
  );
};
