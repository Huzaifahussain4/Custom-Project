import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomButton, InputFiled, CustomFiled } from "../../components";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // const validateInputs = () => {
  //   if (!email) {
  //     toast.error("Email is required");
  //     return false;
  //   }
  //   return true;
  // };

  // const forgotPasswordHandle = async (e) => {
  //   e.preventDefault();
  //   console.log("first");
  //   const payload = {
  //     email,
  //   };

  //   try {
  //     if (validateInputs()) {
  //       setIsLoading(true);
  //       const response = await axios.post(
  //         `${import.meta.env.VITE_API_URL}/api/v1/auth/forget-password`,
  //         payload
  //       );
  //       toast.success(response.data.message);

  //       setTimeout(() => {
  //         navigate("/code");
  //       }, 2000);
  //     }
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //     if (error?.response?.status == 403) {
  //       console.log("403 error");
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <Box
      sx={{
        display: { sm: "flex", xs: "block" },
        height: "100vh",
        background: {
          sm: "black",
          xs: "linear-gradient(180deg, rgba(244,213,255,1) 0%, rgba(145,18,190,1) 33%, rgba(11,6,62,1) 70%, rgba(0,0,0,1) 100%)",
        },
      }}
    >
      <Box
        sx={{
          width: { sm: "50%", xs: "100%" },
          display: { sm: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: " rgb(255,255,255)",
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
        <h1
          style={{
            color: "white",
            marginBottom: "10px",
          }}
        >
          Forgot your password
        </h1>
        <p
          style={{
            color: "white",
            marginBottom: "30px",
            width: "50%",
            textAlign: "center",
          }}
        >
          Enter your username or email address and we will send you a link to
          reset your password.
        </p>

        {/* <Box
          sx={{
            display: "flex",
            width: { md: "55%", sm: "84%", xs: "84%" },
            marginBottom: "30px",
          }}
        >
          <Box sx={{ width: "50%", marginRight: "10px" }}>
            <CustomButton icon={<GoogleIcon />} text={"Google"} />
          </Box>
          <Box sx={{ width: "50%" }}>
            <CustomButton icon={<FacebookOutlinedIcon />} text={"Facebook"} />
          </Box>
        </Box> */}

        <Box
          sx={{
            width: { md: "55%}", sm: "85%", xs: "85%" },
          }}
        >
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { md: "55%", sm: "85%", xs: "85%" },
            marginTop: "50px",
          }}
        >
          <CustomButton
            // icon={<LoginOutlinedIcon />}
            text={"Reset Password"}
            // onClick={forgotPasswordHandle}
          />
        </Box>
      </Box>
      {/* <ToastContainer
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
        transition:slide
      /> */}
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

export default Forgotpassword;
