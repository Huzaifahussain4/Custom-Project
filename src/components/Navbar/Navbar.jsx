import React, { useEffect, useState } from "react";
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
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Divider,
  Drawer,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import theme from "../../utils/theme";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { BorderBottom, Margin, Padding, WidthFull } from "@mui/icons-material";
import shadows from "@mui/material/styles/shadows";
import { CustomButton, CustomStyleButton } from "../CustomButton/CustomButton";
import { useNavigate } from "react-router";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import trackIt from "../../assets/logo.png";
import { SearchField } from "../InputFiled/InputFiled";
import { alignProperty } from "@mui/material/styles/cssUtils";

export const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = ({ path }) => {
    navigate(path);
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

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        position: isSticky ? "fixed" : "absolute",
        left: "50%", // Center align
        transform: "translateX(-50%)",
        top: 0,
        display: "flex",
        justifyContent: "center",
        width: "90%",
        zIndex: 1000,
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: theme.palette.background.default,
        borderBottomRightRadius: "20px", // Bottom right corner
        borderBottomLeftRadius: "20px",
        // padding: "10px 40px", // Add padding to match the design
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: { md: "100%", sm: "100%", xs: "100%" },
          padding: "0px",
          margin: "0px",
        }}
      >
        <Box sx={{ display: { md: "none", xs: "flex" }, gap: 2 }}>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </Box>

        {/* Left-aligned Logo */}
        <img
          src={trackIt}
          style={{ width: "100px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        {/* Center-aligned Dropdown Buttons */}
        <Box sx={{ display: { md: "flex", xs: "none" }, gap: 2 }}>
          <Button
            color="inherit"
            endIcon={<KeyboardArrowDownOutlinedIcon />}
            onClick={handleMenuClick}
            sx={{ color: theme.palette.text.primary, textTransform: "none" }}
          >
            Live
          </Button>
          <Button
            color="inherit"
            endIcon={<KeyboardArrowDownOutlinedIcon />}
            onClick={handleMenuClick}
            sx={{ color: theme.palette.text.primary, textTransform: "none" }}
          >
            Product
          </Button>
          <Button
            color="inherit"
            sx={{ color: theme.palette.text.primary, textTransform: "none" }}
          >
            Shop
          </Button>
          <Button
            color="inherit"
            sx={{ color: theme.palette.text.primary, textTransform: "none" }}
          >
            Creator
          </Button>
          <Button
            color="inherit"
            sx={{ color: theme.palette.text.primary, textTransform: "none" }}
            onClick={() => navigate("/about_us")}
          >
            About
          </Button>
          <Button
            color="inherit"
            sx={{ color: theme.palette.text.primary, textTransform: "none" }}
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
        </Box>

        {/* Dropdown Menu for Features */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleMenuClose({ path: "/live-rank" })}>
            Live Rank
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>Live Search</MenuItem>
          <MenuItem onClick={handleMenuClose}>Tiktok Live Product</MenuItem>
          <MenuItem onClick={handleMenuClose}>Top Live Creators</MenuItem>
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
              <MenuItem onClick={handleProfileClose}>Profile Settings</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            <CustomStyleButton
              text={"Login"}
              backgroundColor={theme.palette.primary.main}
              color={theme.palette.background.default}
              borderColor={theme.palette.primary.main}
              onClick={() => navigate("/login")}
            />
          </Box>
        )}
      </Toolbar>
    </Container>
  );
};

export const SecondNavbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = ({ path }) => {
    navigate(path);
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

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        position: "fixed",
        // left: "50%", // Center align
        // transform: "translateX(-50%)",
        // top: 0,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        zIndex: 1000,
        border: "1px solid #e5e7eb",
        // boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: theme.palette.background.default,
        // borderBottomRightRadius: "20px", // Bottom right corner
        // borderBottomLeftRadius: "20px",
        // padding: "10px 40px", // Add padding to match the design
        // boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: { md: "100%", sm: "100%", xs: "100%" },
          padding: "0px",
          margin: "0px",
        }}
      >
        <Box sx={{ display: { md: "none", xs: "flex" }, gap: 2 }}>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </Box>

        <Box sx={{ display: "flex", gap: 4, width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={trackIt}
              style={{ width: "100px", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </Box>
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              gap: 2,
              width: "30%",
            }}
          >
            <SearchField />
          </Box>
        </Box>

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
              <MenuItem onClick={handleProfileClose}>Profile Settings</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <CustomStyleButton
                text={"Login"}
                backgroundColor={theme.palette.primary.main}
                color={theme.palette.background.default}
                borderColor={theme.palette.primary.main}
                onClick={() => navigate("/login")}
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <CustomStyleButton
                text={"Signup"}
                backgroundColor={theme.palette.primary.main}
                color={theme.palette.background.default}
                borderColor={theme.palette.primary.main}
                onClick={() => navigate("/login")}
              />
            </Box>
          </Box>
        )}
      </Toolbar>
    </Container>
  );
};
