import React from "react";
import {
  CustomButton,
  Footer,
  Navbar,
  SecondNavbar,
  SideNavBar,
} from "./components";
import "./utils/appStyle.css";
import { Outlet, useLocation } from "react-router";

const App = () => {
  const location = useLocation();
  const noNavBarRoutes = [
    "/signup",
    "/emailverification",
    "/code",
    "/forgotpassword",
    "/login",
    "/seller_signup",
    "/live-rank",
    "/live-search",
    "/tiktok-live-product",
    "/top-live-creators",
  ];
  const noSecondNavBarRoutes = ["/", "/about_us", "/contact"];
  const noSideNavBarRoutes = [
    "/signup",
    "/emailverification",
    "/code",
    "/forgotpassword",
    "/login",
    "/seller_signup",
    "/",
    "/about_us",
    "/contact",
  ];
  const noFooterRoutes = [
    "/signup",
    "/emailverification",
    "/code",
    "/forgotpassword",
    "/login",
    "/seller_signup",
    "/live-rank",
    "/live-search",
    "/tiktok-live-product",
    "/top-live-creators",
  ];
  return (
    <>
      {!noNavBarRoutes.includes(location.pathname) && <Navbar />}
      {!noSideNavBarRoutes.includes(location.pathname) && <SideNavBar />}
      {!noSecondNavBarRoutes.includes(location.pathname) && <SecondNavbar />}
      <Outlet />
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
