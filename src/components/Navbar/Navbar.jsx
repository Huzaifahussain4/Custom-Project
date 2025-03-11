import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
  Container,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import theme from "../../utils/theme";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { WidthFull } from "@mui/icons-material";
import shadows from "@mui/material/styles/shadows";
import { CustomButton } from "../CustomButton/CustomButton";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("Token"); // Remove the token
    localStorage.removeItem("id"); // Remove the token
    setProfileAnchorEl(null);
    // window.location.reload(); // Optional: Reload the page to apply changes
    navigate("/login");
  };

  const token = localStorage.getItem("Token");
  console.log("🚀 ~ Navbar ~ token:", token);

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.background.default }}
      elevation={0}
    >
      <Container sx={{ width: { md: "80%", sm: "60%", xs: "50%" } }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left-aligned Logo */}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
          >
            LOGO
          </Typography>
          {/* Center-aligned Dropdown Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              endIcon={<KeyboardArrowDownOutlinedIcon />}
              onClick={handleMenuClick}
              sx={{ color: theme.palette.primary.main }}
            >
              Features
            </Button>
            <Button
              color="inherit"
              endIcon={<KeyboardArrowDownOutlinedIcon />}
              onClick={handleMenuClick}
              sx={{ color: theme.palette.primary.main }}
            >
              Services
            </Button>
            <Button color="inherit" sx={{ color: theme.palette.primary.main }}>
              Contact
            </Button>
          </Box>

          {/* Dropdown Menu for Features */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Feature 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Feature 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Feature 3</MenuItem>
          </Menu>
          {/* Profile Dropdown */}
          {token ? (
            <>
              {/* Right-aligned Profile Icon */}
              <IconButton
                color="inherit"
                onClick={handleProfileClick}
                sx={{ color: theme.palette.primary.main }}
              >
                <AccountCircleIcon fontSize="large" />
              </IconButton>
              <Menu
                anchorEl={profileAnchorEl}
                open={Boolean(profileAnchorEl)}
                onClose={handleProfileClose}
              >
                <MenuItem onClick={handleProfileClose}>
                  Profile Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              <CustomButton text="Login" onClick={() => navigate("/login")} />
            </Box>
          )}
          {/* {!token && <CustomButton text="Login" />} */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
