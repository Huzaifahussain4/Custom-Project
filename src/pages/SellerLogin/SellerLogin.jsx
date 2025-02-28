import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomButton, InputFiled, SlideButton } from "../../components";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../../utils/appStyle.css";
// import darkBlueTheme from "./utils/theme.jsx";

const SellerLogin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isBuyer, setIsBuyer] = useState(false);
  console.log("🚀 ~ Login ~ isBuyer:", isBuyer);

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsBuyer((prev) => !prev);
    isBuyer ? navigate("/seller_login") : navigate("/");
  };

  const validateInputs = () => {
    if (!login || !password) {
      setValidate("All fields are required");
      toast.error("All fields are required");
      return false;
    }
    return true;
  };

  const loginHandle = async (e) => {
    e.preventDefault();
    const payload = {
      email: login,
      password,
    };

    try {
      if (validateInputs()) {
        setIsLoading(true);
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/login_buyer/`,
          payload
          // { withCredentials: true } // ✅ Include credentials if needed
        );

        const token = response?.data?.tokens?.accessToken;
        localStorage.setItem("token", token);
        console.log("Login Successful :", response.data);
        toast.success(response.data.message);

        setTimeout(() => {
          navigate("/signup");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      if (error?.response?.status === 403) {
        navigate("/emailverification");
      }
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  return (
    <Box
      sx={{
        display: { sm: "flex", xs: "block" },
        height: "100vh",
        bgcolor: {
          sm: "black",
          xs: "linear-gradient(180deg, rgba(244,213,255,1) 0%, rgba(145,18,190,1) 33%, rgba(11,6,62,1) 70%, rgba(0,0,0,1) 100%)",
        },
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          width: { sm: "50%", xs: "100%" },
          display: { sm: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          m: 2,
          background:
            "linear-gradient(180deg, rgba(244,213,255,1) 0%, rgba(145,18,190,1) 33%, rgba(11,6,62,1) 70%, rgba(0,0,0,1) 100%)",
          borderRadius: 3,
        }}
      >
        <span
          style={{
            width: "70%",
            fontSize: "40px",
            color: "white",
            textAlign: "center",
            fontWeight: "600",
            lineHeight: "50px",
          }}
        >
          Collaborate Seamlessly
        </span>
        <span
          style={{
            marginTop: "10px",
            width: "40%",
            fontSize: "15px",
            color: "white",
            textAlign: "center",
            fontWeight: "300",
          }}
        >
          Empower Teams to Work Together on One Document, Anytime, Anywhere!
        </span>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          width: { sm: "50%", xs: "100%" },
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ marginBottom: "10px" }}>
          <SlideButton checked={!isBuyer} onchange={handleToggle} />
        </Box>

        <h1 style={{ color: "white", marginBottom: "10px" }}>
          Login to your seller account
        </h1>
        <p style={{ color: "white", marginBottom: "20px" }}>
          Enter your credentials
        </p>

        {/* Social Login Buttons */}
        <Box
          sx={{
            display: "flex",
            width: { md: "55%", sm: "84%", xs: "84%" },
            marginBottom: "10px",
            height: "49px",
          }}
        >
          {/* <Box sx={{ width: "50%", marginRight: "10px" }}>
            <CustomButton icon={<GoogleIcon />} text={"Google"} />
          </Box>
          <Box sx={{ width: "50%" }}>
            <CustomButton icon={<FacebookOutlinedIcon />} text={"Facebook"} />
          </Box> */}
        </Box>

        {/* Input Fields */}
        <Box sx={{ width: { md: "55%", sm: "85%", xs: "85%" } }}>
          <Box>
            <label
              style={{
                color: "white",
                width: "50%",
                marginTop: "15px",
                fontWeight: "300",
              }}
            >
              Email
            </label>
            <InputFiled
              typeValue={"email"}
              placeholderValue={"Enter your Email"}
              onChange={(e) => setLogin(e.target.value)}
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <label
              style={{
                color: "white",
                width: "50%",
                marginTop: "20px",
                fontWeight: "300",
              }}
            >
              Password
            </label>
            <InputFiled
              typeValue={"password"}
              placeholderValue={"Enter your Password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Link
              to="/forgot_password"
              style={{
                marginLeft: "5px",
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Forgot Password
            </Link>
          </Box>
        </Box>

        {/* Login Button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { md: "55%", sm: "85%", xs: "85%" },
            marginTop: "20px",
          }}
        >
          <CustomButton
            // icon={<LoginOutlinedIcon />}
            text={"Login"}
            onClick={loginHandle}
          />
        </Box>

        {/* Signup Link */}
        <span style={{ color: "#fff", marginTop: "30px" }}>
          Create your account
          <Link
            to="/signup"
            style={{
              marginLeft: "5px",
              color: "white",
              fontWeight: "500",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Signup
          </Link>
        </span>
      </Box>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Full-Screen Loader */}
      {isLoading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      )}
    </Box>
  );
};

export default SellerLogin;
