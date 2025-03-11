import { Box, CircularProgress, Step, StepLabel, Stepper } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import theme from "../../utils/theme";

const SellerSignup = () => {
  const navigate = useNavigate();

  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState();
  const [company_name, setCompany_name] = useState("");
  const [country, setCountry] = useState("");
  const [company_website, setCompany_website] = useState("");
  const [password, setPassword] = useState("");
  const [again_password, setAgain_password] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [emailBtn, setEmailBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validate, setValidate] = useState("");
  const [isBuyer, setIsBuyer] = useState(false);
  const [stepCount, setStepCount] = useState(0);
  const [phone_country_code, setPhone_country_code] = useState("us");

  const handleStepCount = () => {
    if (stepCount === 3) return;
    if (stepCount === 0) {
      if (full_name && phone_number && email) {
        setStepCount((prev) => prev + 1);
        console.log("🚀 ~ Signup ~ stepCount:", stepCount);
      } else {
        toast.error("All fields are required");
      }
    } else if (stepCount === 1) {
      if (company_name && country && company_website) {
        setStepCount((prev) => prev + 1);
        console.log("🚀 ~ Signup ~ stepCount:", stepCount);
      } else {
        toast.error("All fields are required");
      }
    }
  };
  useEffect(() => {
    console.log("🚀 ~ Updated stepCount:", stepCount);
  }, [stepCount]);

  const handleStepBack = () => {
    if (stepCount === 0) return;
    setStepCount((prev) => prev - 1);
  };

  const handleToggle = () => {
    setIsBuyer((prev) => !prev);
    console.log("🚀 ~ Signup ~ isBuyer: handle", isBuyer);
    isBuyer ? navigate("/seller_signup") : navigate("/signup");
  };

  const handleEmailBtn = () => {
    setEmailBtn((prev) => !prev);
  };

  const validateInputs = () => {
    if (!password || !confirm_password) {
      toast.error("All fields are required");
      return false;
    }

    if (password !== confirm_password || password !== again_password) {
      toast.error("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSignUp = async (e) => {
    // e.preventDefault();

    const payload = {
      full_name,
      phone_country_code,
      phone_number,
      email,
      password,
      confirm_password,
      company_name,
      country,
      company_website,
    };

    try {
      if (validateInputs()) {
        setIsLoading(true);
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/signup_seller/`,
          payload
        );
        const uniqueToken = response?.data?.unique_token;
        console.log("🚀 ~ signUpHandle ~ token:", response);
        localStorage.setItem("Token", uniqueToken);
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response.data.error);
      if (error.response) {
        console.error("Sign up failed with response:", error.response.data);
      } else {
        console.error("Sign up failed:", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    "General Info",
    "Company Registration",
    "Password Confirmation",
  ];

  return (
    <Box
      sx={{
        display: { sm: "flex", xs: "block" },
        height: "100vh",
        background: {
          sm: theme.palette.background.default,
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
            "linear-gradient(180deg, rgba(1, 145, 248,1) 0%, rgba(1, 145, 248,1) 33%, rgb(255, 255, 255) 100%)",
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
              color: theme.palette.primary.main,
              marginBottom: "5px",
            }}
          >
            Create Your seller account
          </h1>
          <p
            style={{
              color: theme.palette.text.primary,
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
              color: theme.palette.text.primary,
              marginTop: "30px",
            }}
          >
            Already have an account?
            <Link
              to="/login"
              style={{
                marginLeft: "5px",
                color: theme.palette.text.primary,
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
              color: theme.palette.primary.main,
              marginBottom: "5px",
            }}
          >
            Create Your Account
          </h1>
          {stepCount === 0 ? (
            <p
              style={{
                color: theme.palette.text.primary,
                marginBottom: "30px",
              }}
            >
              General Information
            </p>
          ) : stepCount === 1 ? (
            <p
              style={{
                color: theme.palette.text.primary,
                marginBottom: "30px",
              }}
            >
              Business Information
            </p>
          ) : stepCount === 2 ? (
            <p
              style={{
                color: theme.palette.text.primary,
                marginBottom: "30px",
              }}
            >
              Password Verification
            </p>
          ) : null}

          {/* <p
            style={{
              color: "white",
              marginBottom: "15px",
            }}
          >
            Chose your signup method
          </p> */}

          <Stepper activeStep={stepCount} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box
            sx={{
              width: { md: "55%", sm: "85%", xs: "85%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // marginTop: "20px",
            }}
          ></Box>
          <Box
            sx={{
              width: { md: "55%}", sm: "85%", xs: "85%" },
            }}
          >
            {stepCount === 0 ? (
              <>
                <Box sx={{ marginTop: "10px" }}>
                  <label
                    style={{
                      color: theme.palette.text.primary,
                      width: "50%",
                      marginTop: "10px",
                      fontWeight: "300",
                    }}
                  >
                    Full Name
                  </label>
                  <InputFiled
                    typeValue={"text"}
                    placeholderValue={"Enter full name"}
                    onChange={(e) => setFull_name(e.target.value)}
                    value={full_name}
                  />
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                  <label
                    style={{
                      color: theme.palette.text.primary,
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
                    value={email}
                  />
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                  <label
                    style={{
                      color: theme.palette.text.primary,
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
              </>
            ) : stepCount === 1 ? (
              <>
                <Box sx={{ marginTop: "10px" }}>
                  <label
                    style={{
                      color: theme.palette.text.primary,
                      width: "50%",
                      marginTop: "10px",
                      fontWeight: "300",
                    }}
                  >
                    Country
                  </label>
                  <InputFiled
                    typeValue={"text"}
                    placeholderValue={"Enter full name"}
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                  />
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                  <label
                    style={{
                      color: theme.palette.text.primary,
                      width: "50%",
                      marginTop: "10px",
                      fontWeight: "300",
                    }}
                  >
                    Company Name
                  </label>
                  <InputFiled
                    typeValue={"text"}
                    placeholderValue={"Enter your Email"}
                    onChange={(e) => setCompany_name(e.target.value)}
                    value={company_name}
                  />
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                  <label
                    style={{
                      color: theme.palette.text.primary,
                      width: "50%",
                      marginTop: "10px",
                      fontWeight: "300",
                    }}
                  >
                    Company Website
                  </label>
                  <InputFiled
                    typeValue={"text"}
                    placeholderValue={"Enter your Company Website"}
                    onChange={(e) => setCompany_website(e.target.value)}
                    value={company_website}
                  />
                </Box>
              </>
            ) : stepCount === 2 ? (
              <>
                <Box sx={{ marginTop: "10px" }}>
                  <label
                    style={{
                      color: theme.palette.text.primary,
                      width: "50%",
                      marginTop: "10px",
                      fontWeight: "300",
                    }}
                  >
                    Password
                  </label>
                  <InputFiled
                    typeValue={"password"}
                    placeholderValue={"Enter full name"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                  <label
                    style={{
                      color: theme.palette.text.primary,
                      width: "50%",
                      marginTop: "10px",
                      fontWeight: "300",
                    }}
                  >
                    Again Password
                  </label>
                  <InputFiled
                    typeValue={"password"}
                    placeholderValue={"Enter your Email"}
                    onChange={(e) => setAgain_password(e.target.value)}
                    value={again_password}
                  />
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                  <label
                    style={{
                      color: theme.palette.text.primary,
                      width: "50%",
                      marginTop: "10px",
                      fontWeight: "300",
                    }}
                  >
                    Confirm Password
                  </label>
                  <InputFiled
                    typeValue={"password"}
                    placeholderValue={"Enter your Email"}
                    onChange={(e) => setConfirm_password(e.target.value)}
                    value={confirm_password}
                  />
                </Box>
              </>
            ) : null}
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
            {stepCount === 0 ? (
              <Box sx={{ width: "50%", marginRight: "10px" }}>
                <CustomButton
                  // icon={<LoginOutlinedIcon />}
                  text={"Back"}
                  onClick={handleStepBack}
                  disabled
                />
              </Box>
            ) : (
              <Box sx={{ width: "50%", marginRight: "10px" }}>
                <CustomButton
                  // icon={<LoginOutlinedIcon />}
                  text={"Back"}
                  onClick={handleStepBack}
                />
              </Box>
            )}
            {stepCount === 2 ? (
              <Box sx={{ width: "50%", marginLeft: "10px" }}>
                <CustomButton
                  text={"Signup"}
                  onClick={() => {
                    if (validateInputs()) {
                      handleSignUp();
                    }
                  }}
                />
              </Box>
            ) : (
              <Box sx={{ width: "50%", marginLeft: "10px" }}>
                <CustomButton
                  // icon={<LoginOutlinedIcon />}
                  text={"Continue"}
                  onClick={handleStepCount}
                />
              </Box>
            )}
          </Box>
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
export default SellerSignup;
