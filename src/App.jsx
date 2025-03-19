import React from "react";
import { CustomButton, Footer, Navbar } from "./components";
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
  ];
  return (
    <>
      {!noNavBarRoutes.includes(location.pathname) && <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
