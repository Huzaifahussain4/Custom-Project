import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
} from "@mui/material";
import { CustomFiled, InputFiled } from "../InputFiled/InputFiled";
import {
  CustomButton,
  CustomStyleButton,
  CustomStyleButtonComponent,
} from "../CustomButton/CustomButton";
import theme from "../../utils/theme";

export const SignupEmailSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    // Clear field after submission
    setEmail("");
  };

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: theme.palette.greenBg.main,
          borderRadius: 3,
          py: 5,
          px: { xs: 3, md: 5 },
        }}
      >
        <Box sx={{ maxWidth: "600px", mx: "auto" }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "#0a192f",
              mb: 2,
              fontSize: { xs: "1.75rem", md: "2rem" },
            }}
          >
            Signup for our newsletter to get the latest information in your
            inbox
          </Typography>

          <Typography variant="body2" sx={{ color: "#64748b", mb: 3 }}>
            No spam message, your email is safe with us
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
          >
            {/* <TextField
              fullWidth
              placeholder="Type your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              type="email"
              required
              sx={{
                backgroundColor: "white",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(0, 0, 0, 0.1)",
                  },
                },
              }}
              InputProps={{
                sx: { py: 0.5 },
              }}
            /> */}

            <InputFiled
              typeValue={"email"}
              placeholderValue={"Enter your Email"}
            />

            {/* <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#1976d2",
                borderRadius: 2,
                textTransform: "none",
                py: 1.2,
                px: 3,
                minWidth: { xs: "100%", sm: "120px" },
                "&:hover": {
                  bgcolor: "#1565c0",
                },
              }}
            >
              Subscribe
            </Button> */}
            <Box sx={{ width: { md: "20%", xs: "100%" } }}>
              <CustomStyleButtonComponent
                padding={"20px"}
                text={"Subscribe"}
                color={theme.palette.background.default}
                backgroundColor={theme.palette.primary.main}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};
