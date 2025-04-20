import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { RouterProvider } from "react-router-dom";
import {
  AboutUs,
  Contact,
  CreatorSearch,
  EcommerceRank,
  Forgotpassword,
  GrowthRank,
  Home,
  LiveRank,
  LiveSearch,
  Login,
  MostPromoted,
  NewListed,
  ProductSearch,
  SellerSignup,
  ShopMostPromoted,
  ShopRank,
  ShopSearch,
  Signup,
  TiktokLiveProduct,
  TopLiveCreators,
  TopSelling,
  TrendingCreators,
  VerifiedCreatorRank,
  VideoProductRank,
} from "./pages/index.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import darkBlueTheme from "./utils/theme.jsx";
import theme from "./utils/theme.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="seller_signup" element={<SellerSignup />} />
        <Route path="forgot_password" element={<Forgotpassword />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about_us" element={<AboutUs />} />
        <Route path="live-rank" element={<LiveRank />} />
        <Route path="live-search" element={<LiveSearch />} />
        <Route path="tiktok-live-product" element={<TiktokLiveProduct />} />
        <Route path="top-live-creators" element={<TopLiveCreators />} />
        <Route path="product-search" element={<ProductSearch />} />
        <Route path="most-promoted-product" element={<MostPromoted />} />
        <Route path="new-listed" element={<NewListed />} />
        <Route path="top-selling" element={<TopSelling />} />
        <Route path="Video-Product-Rank" element={<VideoProductRank />} />
        <Route path="creator-search" element={<CreatorSearch />} />
        <Route path="ecommerce-rank" element={<EcommerceRank />} />
        <Route path="growth-rank" element={<GrowthRank />} />
        <Route path="trending-rank" element={<TrendingCreators />} />
        <Route path="verified-rank" element={<VerifiedCreatorRank />} />
        <Route path="shop-search" element={<ShopSearch />} />
        <Route path="shop-rank" element={<ShopRank />} />
        <Route path="most-promotedshop" element={<ShopMostPromoted />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* MUI global styles */}
      <RouterProvider router={route} /> {/* React Router */}
    </ThemeProvider>
  </React.StrictMode>
);
