import { Box, Button } from "@mui/material";
import React from "react";

export const CustomButton = ({ icon, text, onClick, disabled }) => {
  return (
    <Button
      className="custom-btn"
      disabled={disabled}
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid gray",
        padding: 1.5,
        borderRadius: "15px",
        fontSize: "12px",
        cursor: "pointer",
        width: { md: "100%", sm: "100%", xs: "100%" },
        "&:hover": {
          backgroundColor: "#1d1d1d",
          color: "rgb(145,18,190)",
          border: "1px solid rgb(145,18,190)",
        },
      }}
      onClick={onClick}
    >
      {icon && (
        <span
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            marginRight: "15px",
          }}
        >
          {icon}
        </span>
      )}
      <span
        style={{
          // marginLeft: "15px",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "500",
        }}
      >
        {text}
      </span>
    </Button>
  );
};

export const SlideButton = ({ checked, onchange }) => {
  return (
    <Box>
      <label for="filter" class="switch" aria-label="Toggle Filter">
        <input
          type="checkbox"
          id="filter"
          checked={checked}
          onChange={onchange}
        />
        <span>Buyer</span>
        <span>Seller</span>
      </label>
    </Box>
  );
};
