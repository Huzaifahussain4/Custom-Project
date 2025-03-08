import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import {
  CustomButton,
  InputFiled,
  CustomFiled,
  SlideButton,
  PhoneNumberField,
} from "../../components";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { EmailOutlined, EmailRounded } from "@mui/icons-material";

const Signup = () => {
  const navigate = useNavigate();

  const [full_name, setFull_name] = useState("");
  // const [username, setUsername] = useState("");
  // const [phone_number, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState("");
  const [phone_country_code, setPhone_country_code] = useState("us");
  const [phone_number, setPhone_number] = useState();
  const [emailBtn, setEmailBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBuyer, setIsBuyer] = useState(true);
  const handleToggle = () => {
    setIsBuyer((prev) => !prev);
    isBuyer ? navigate("/seller_signup") : navigate("/signup");
  };

  const handleEmailBtn = () => {
    setEmailBtn((prev) => !prev);
  };

  const validateInputs = () => {
    if (!full_name || !phone_number || !email || !password) {
      setValidate("All fields are required");
      toast.error("All fields are required");
      return false;
    }

    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const payload = {
      full_name,
      phone_country_code,
      phone_number,
      email,
      password,
    };

    try {
      if (validateInputs()) {
        setIsLoading(true);
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/signup_buyer/`,
          payload
        );
        console.log("🚀 ~ handleSignUp ~ response:", response);
        const id = response?.data?.buyer_id;
        console.log("🚀 ~ signUpHandle ~ id:", id);
        const token = response?.data?.unique_token;
        console.log("🚀 ~ handleSignUp ~ token:", token);
        localStorage.setItem("Tokken", token);
        localStorage.setItem("id", id);
        toast.success(response.data.message);
        // setTimeout(() => {
        //   navigate("/emailverification");
        // }, 2000);
      }
    } catch (error) {
      console.log("🚀 ~ handleSignUp ~ error:", error);
      toast.error(error.response.data.error);
      if (error.response) {
        console.error("Sign up failed with response:", error.response.message);
      } else {
        console.error("Sign up failed:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

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
      {!emailBtn ? (
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
          <h1
            style={{
              color: "white",
              marginBottom: "5px",
            }}
          >
            Create Your buyer account
          </h1>
          <p
            style={{
              color: "white",
              marginBottom: "30px",
            }}
          >
            Chose your signup method
          </p>

          <Box
            sx={{
              display: "flex",
              width: { md: "55%", sm: "84%", xs: "84%" },
              marginBottom: "10px",
            }}
          >
            <Box sx={{ width: "50%", marginRight: "10px" }}>
              <CustomButton icon={<GoogleIcon />} text={"Google"} />
            </Box>
            <Box sx={{ width: "50%" }}>
              <CustomButton icon={<FacebookOutlinedIcon />} text={"Facebook"} />
            </Box>
          </Box>

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
              icon={<EmailRounded />}
              text={"Sign up with email"}
              onClick={handleEmailBtn}
            />
          </Box>
          <span
            style={{
              color: "#fff",
              marginTop: "30px",
            }}
          >
            Already have an account?
            <Link
              to="/"
              style={{
                marginLeft: "5px",
                color: "white",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </span>
        </Box>
      ) : (
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
              marginBottom: "5px",
            }}
          >
            Create Your Account
          </h1>
          {/* <p
            style={{
              color: "white",
              marginBottom: "15px",
            }}
          >
            Chose your signup method
          </p> */}

          {/* <Box
            sx={{
              width: { md: "55%", sm: "85%", xs: "85%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // marginTop: "20px",
            }}
          >
            <Box sx={{ width: " 100%", marginRight: "10px" }}>
              <label
                style={{
                  color: "white",
                  width: "100%",
                  marginTop: "40px",
                  fontWeight: "300",
                }}
              >
                Full Name
              </label>
              <CustomFiled
                typeValue={"text"}
                placeholderValue={"Enter your Full Name"}
                onChange={(e) => setFull_name(e.target.value)}
              />
            </Box>
            <Box sx={{ width: " 100%" }}>
              <label
                style={{
                  color: "white",
                  width: "50%",
                  marginTop: "10px",
                  fontWeight: "300",
                }}
              >
                User Name
              </label>
              <CustomFiled
                typeValue={"text"}
                placeholderValue={"Enter valid User name"}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Box>
          </Box> */}

          <Box
            sx={{
              width: { md: "55%}", sm: "85%", xs: "85%" },
            }}
          >
            <Box sx={{ marginTop: "10px" }}>
              <label
                style={{
                  color: "white",
                  width: "50%",
                  marginTop: "10px",
                  fontWeight: "300",
                }}
              >
                Full name
              </label>
              <InputFiled
                typeValue={"text"}
                placeholderValue={"Enter your full name"}
                onChange={(e) => setFull_name(e.target.value)}
              />
            </Box>
            <Box sx={{ marginTop: "10px" }}>
              <label
                style={{
                  color: "white",
                  width: "50%",
                  marginTop: "10px",
                  fontWeight: "300",
                }}
              >
                Phone Number
              </label>
              {/* <InputFiled
                                typeValue={"number"}
                                placeholderValue={"Enter your Password"}
                                onChange={(e) => setPhone_number(e.target.value)}
                                value={phone_number}
                              /> */}
              <PhoneNumberField
                onChange={(phone_number, country) => {
                  console.log("Country object:", country); // Debugging
                  setPhone_number(phone_number);

                  // Ensure country exists before accessing its properties
                  setPhone_country_code(country?.dialCode || ""); // Updated: Use `dialCode` if `phone_country_code` is not available

                  if (typeof onChange === "function") {
                    onChange(phone_number);
                  }
                }}
                value={phone_number}
                countryCode={phone_country_code}
              />
            </Box>
            <Box sx={{ marginTop: "10px" }}>
              <label
                style={{
                  color: "white",
                  width: "50%",
                  marginTop: "10px",
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
            <Box sx={{ marginTop: "10px" }}>
              <label
                style={{
                  color: "white",
                  width: "50%",
                  marginTop: "10px",
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
          </Box>
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
              icon={<LoginOutlinedIcon />}
              text={"Signup"}
              onClick={handleSignUp}
            />
          </Box>
          <span
            style={{
              color: "#fff",
              marginTop: "30px",
            }}
          >
            Already have an account?
            <Link
              to="/"
              style={{
                marginLeft: "5px",
                color: "white",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </span>
        </Box>
      )}

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
        transition:slide
      />

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

export default Signup;
