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
  Forgotpassword,
  Home,
  Login,
  SellerSignup,
  Signup,
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
