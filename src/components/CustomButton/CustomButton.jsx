import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import "../../utils/appStyle.css";

export const CustomButton = ({ icon, text, onClick, disabled }) => {
  const theme = useTheme();
  return (
    <Button
      className="custom-btn"
      disabled={disabled}
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid gray",
        padding: 1,
        borderRadius: "15px",
        fontSize: "12px",
        cursor: "pointer",
        width: { md: "100%", sm: "100%", xs: "100%" },
        "&:hover": {
          backgroundColor: theme.palette.hover.main,
          color: theme.palette.primary.main,
          border: "1px solid",
          borderColor: theme.palette.primary.main,
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
          fontWeight: "500",
        }}
      >
        {text}
      </span>
    </Button>
  );
};
export const CustomStyleButton = ({
  icon,
  text,
  onClick,
  disabled = false,
  backgroundColor,
  color,
  hover,
  borderColor,
}) => {
  const theme = useTheme();
  return (
    <Button
      className="custom-btn"
      disabled={disabled}
      sx={{
        backgroundColor: backgroundColor,
        color: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid",
        borderColor: borderColor,
        padding: 1,
        borderRadius: "15px",
        fontSize: "12px",
        cursor: "pointer",
        width: { md: "100%", sm: "100%", xs: "100%" },
        textTransform: "none",

        "&:hover": {
          backgroundColor: hover || theme.palette.background.default,
          color: theme.palette.primary.main,
          border: "1px solid",
          borderColor: theme.palette.primary.main,
        },
      }}
      onClick={!disabled ? onClick : undefined}
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
          fontWeight: "500",
        }}
      >
        {text}
      </span>
    </Button>
  );
};
export const CustomStyleButtonComponent = ({
  icon,
  text,
  onClick,
  disabled = false,
  backgroundColor,
  color,
  padding,
  hover,
  borderColor,
}) => {
  const theme = useTheme();
  return (
    <Button
      className="custom-btn"
      disabled={disabled}
      sx={{
        backgroundColor: backgroundColor,
        color: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid",
        borderColor: borderColor,
        padding: { padding },
        borderRadius: "15px",
        fontSize: "12px",
        cursor: "pointer",
        width: { md: "100%", sm: "100%", xs: "100%" },
        textTransform: "none",
        // fontFamily: "Poppins, sans-serif",

        "&:hover": {
          backgroundColor: hover || theme.palette.background.default,
          color: theme.palette.primary.main,
          border: "1px solid",
          borderColor: theme.palette.primary.main,
        },
      }}
      onClick={!disabled ? onClick : undefined}
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
