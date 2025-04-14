import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  TrendingUp as MarketIcon,
  Videocam as LiveIcon,
  Inventory as ProductIcon,
  Person as CreatorIcon,
  Storefront as ShopIcon,
  SmartToy as AIIcon,
  ExpandLess,
  ExpandMore,
  Search as SearchIcon,
  EmojiEvents as RankIcon,
  AddCircle as NewIcon,
  Recommend as PromotedIcon,
  VideoLibrary as VideoIcon,
  ShoppingBag as EcommerceIcon,
  VerifiedUser as VerifiedIcon,
  Whatshot as TrendingIcon,
  Campaign as MarketingIcon,
  Business as BusinessIcon,
  ShowChart as GrowthIcon,
  StarRate as StarRateIcon,
  Person as PersonIcon,
  Padding,
} from "@mui/icons-material";
import "./SidebarNavigationcss.css";
import { Link } from "react-router-dom";

export const SideNavBar = () => {
  const [open, setOpen] = useState(true);
  const drawerwidth = 240;
  const [openMenus, setOpenMenus] = useState({
    live: false,
    product: false,
    creator: false,
    shop: false,
    ai: false,
  });

  const handleMenuToggle = (menu) => {
    setOpenMenus({
      ...openMenus,
      [menu]: !openMenus[menu],
    });
  };
  // const location = useLocation();
  const drawer = (
    <Box>
      {/* <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          Admin Dashboard
        </Typography>
      </Toolbar> */}
      {/* <Divider /> */}
      <List>
        {/* Dashboard */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard">
            {/* <ListItemIcon> */}
            <DashboardIcon sx={{ mr: 2 }} />
            {/* </ListItemIcon> */}
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        {/* Market Overview */}
        <ListItem disablePadding>
          <ListItemButton>
            {/* <ListItemIcon> */}
            <MarketIcon sx={{ mr: 2 }} />
            {/* </ListItemIcon> */}
            <ListItemText primary="Market Overview" />
          </ListItemButton>
        </ListItem>

        {/* Live */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleMenuToggle("live")}>
            {/* <ListItemIcon > */}
            <LiveIcon sx={{ mr: 2 }} />
            {/* </ListItemIcon> */}
            <ListItemText primary="Live" />
            {openMenus.live ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openMenus.live} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={Link}
              to="/live-search"
              sx={{ pl: 4 }}
              selected={location.pathname === "/live-search"}
            >
              {/* <ListItemIcon> */}
              <SearchIcon sx={{ mr: 2 }} />
              {/* </ListItemIcon> */}
              <ListItemText primary="Live Search" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/live-rank"
              sx={{ pl: 4 }}
              selected={location.pathname === "/live-rank"}
            >
              {/* <ListItemIcon> */}
              <FontAwesomeIcon
                icon={faRankingStar}
                style={{ fontSize: 20, marginRight: 16 }}
              />
              {/* </ListItemIcon> */}
              <ListItemText primary="Live Rank" />
            </ListItemButton>
            {/* <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon>
                <RankIcon />
              </ListItemIcon>
              <ListItemText primary="TikTok Live Rank" />
            </ListItemButton> */}
            <ListItemButton
              component={Link}
              to="/tiktok-live-product"
              sx={{ pl: 4 }}
              selected={location.pathname === "/tiktok-live-product"}
            >
              {/* <ListItemIcon> */}
              <FontAwesomeIcon
                icon={faTiktok}
                style={{ fontSize: 20, marginRight: 24 }}
              />
              {/* </ListItemIcon> */}
              <ListItemText primary="TikTok Live Product" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/top-live-creators"
              sx={{ pl: 4 }}
              selected={location.pathname === "/top-live-creators"}
            >
              {/* <ListItemIcon> */}
              <PersonIcon sx={{ mr: 2 }} />
              {/* </ListItemIcon> */}
              <ListItemText primary="Top Live Creators" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Product */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleMenuToggle("product")}>
            {/* <ListItemIcon> */}
            <ProductIcon sx={{ mr: 2 }} />
            {/* </ListItemIcon> */}
            <ListItemText primary="Product" />
            {openMenus.product ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openMenus.product} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={Link}
              to="product-search"
              sx={{ pl: 4 }}
              selected={location.pathname === "product-search"}
            >
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Product Search" />
            </ListItemButton>

            {/* <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Product Search" />
            </ListItemButton> */}

            <ListItemButton
              component={Link}
              to="top-selling"
              sx={{ pl: 1 }}
              selected={location.pathname === "top-selling"}
            >
              <ListItemIcon>
                <NewIcon />
              </ListItemIcon>
              <ListItemText primary="Top Selling" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="new-listed"
              sx={{ pl: 1 }}
              selected={location.pathname === "new-listed"}
            >
              <ListItemIcon>
                <MarketIcon />
              </ListItemIcon>
              <ListItemText primary="New Listed" />
            </ListItemButton>

            {/* <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon>
                <NewIcon />
              </ListItemIcon>
              <ListItemText primary="New Listed" />
            </ListItemButton> */}

            <ListItemButton
              component={Link}
              to="mostpromoted-product"
              sx={{ pl: 1 }}
              selected={location.pathname === "mostpromoted-product"}
            >
              <ListItemIcon>
                <PromotedIcon />
              </ListItemIcon>
              <ListItemText primary="Most Promoted" />
            </ListItemButton>

            {/* <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon>
                <PromotedIcon />
              </ListItemIcon>
              <ListItemText primary="Most Promoted" />
            </ListItemButton> */}

            <ListItemButton
              component={Link}
              to="VideoProduct-Rank"
              sx={{ pl: 1 }}
              selected={location.pathname === "VideoProduct-Rank"}
            >
              <ListItemIcon>
                <VideoIcon />
              </ListItemIcon>
              <ListItemText primary="Video Product Rank" />
            </ListItemButton>

            {/* <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon>
                <VideoIcon />
              </ListItemIcon>
              <ListItemText primary="Video Product Rank" />
            </ListItemButton> */}
          </List>
        </Collapse>

        {/* Creator */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleMenuToggle("creator")}>
            {/* <ListItemIcon> */}
            <CreatorIcon sx={{ mr: 2 }} />
            {/* </ListItemIcon> */}
            <ListItemText primary="Creator" />
            {openMenus.creator ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openMenus.creator} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItemButton sx={{ pl: 1 }}> */}
            {/* <ListItemIcon>
                <SearchIcon />
              </ListItemIcon> */}
            <ListItemButton
              component={Link}
              to="/creator-search"
              sx={{ pl: 1 }}
              selected={location.pathname === "/creator-search"}
            >
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Creator Search" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="/growth-rank"
              sx={{ pl: 1 }}
              selected={location.pathname === "/growth-rank"}
            >
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Growth Rank" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="/ecommerce-rank"
              sx={{ pl: 1 }}
              selected={location.pathname === "/ecommerce-rank"}
            >
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Ecommerce Rank" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="/verified-rank"
              sx={{ pl: 1 }}
              selected={location.pathname === "/verified-rank"}
            >
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Verified Rank" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="trending-rank"
              sx={{ pl: 1 }}
              selected={location.pathname === "trending-rank"}
            >
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Trending Rank" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Shop */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleMenuToggle("shop")}>
            {/* <ListItemIcon> */}
            <ShopIcon sx={{ mr: 2 }} />
            {/* </ListItemIcon> */}
            <ListItemText primary="Shop" />
            {openMenus.shop ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openMenus.shop} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={Link}
              to="shop-search"
              sx={{ pl: 1 }}
              selected={location.pathname === "shop-search"}
            >
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Shop Search" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="shop-rank"
              sx={{ pl: 1 }}
              selected={location.pathname === "shop-rank"}
            >
              <ListItemIcon>
                <RankIcon />
              </ListItemIcon>
              <ListItemText primary="Shop Rank" />
            </ListItemButton>

            {/* <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon>
              <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Shop Search" />
            </ListItemButton> */}
            <ListItemButton
              component={Link}
              to="most-promotedshop"
              sx={{ pl: 1 }}
              selected={location.pathname === "most-promotedshop"}
            >
              <ListItemIcon>
                <PromotedIcon />
              </ListItemIcon>
              <ListItemText primary="Shop Promoted" />
            </ListItemButton>

            {/* 
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon>
                <PromotedIcon />
              </ListItemIcon>
              <ListItemText primary="Most Promoted" />
            </ListItemButton> */}
          </List>
        </Collapse>

        {/* AI Agent */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleMenuToggle("ai")}>
            {/* <ListItemIcon> */}
            <AIIcon sx={{ mr: 2 }} />
            {/* </ListItemIcon> */}
            <ListItemText primary="AI Agent" />
            {openMenus.ai ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openMenus.ai} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon>
                <MarketingIcon />
              </ListItemIcon>
              <ListItemText primary="Marketing Agent" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Business Agent" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerwidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerwidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
