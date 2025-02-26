import React from "react";
import { CustomButton } from "./components";
import "./utils/appStyle.css";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
