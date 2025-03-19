import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Box,
  Snackbar,
  Alert,
  Divider,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import theme from "../../utils/theme";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CustomStyleButton, CustomStyleButtonComponent } from "../../components/CustomButton/CustomButton";

// Your custom InputField component
export function InputField({
  typeValue,
  placeholderValue,
  onChange,
  value,
  name,
  error,
}) {
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: "15px",
        border: error ? "1px solid #f44336" : "1px solid gray",
        bgcolor: theme.palette.background.default,
        boxShadow: "none",
        width: { md: "100%", sm: "100%", xs: "100%" },
        marginTop: 1,
        marginBottom: 1,
        padding: "0px",
      }}
    >
      <input
        onChange={onChange}
        type={typeValue}
        placeholder={placeholderValue}
        className="customFieldSearchBar"
        value={value}
        name={name}
        style={{
          border: "none",
          width: "100%",
          backgroundColor: theme.palette.background.default,
          padding: "20px 0 20px 10px",
          borderRadius: "15px",
          color: theme.palette.text.primary,
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />
      {error && (
        <Typography
          variant="caption"
          color="error"
          sx={{ pl: 2, pb: 1, display: "block" }}
        >
          {error}
        </Typography>
      )}
    </Paper>
  );
}

// Custom dropdown component to match your style
export function CustomDropdown({
  value,
  onChange,
  options,
  name,
  placeholder,
}) {
  return (
    <Paper
      sx={{
        borderRadius: "15px",
        border: "1px solid gray",
        bgcolor: theme.palette.background.default,
        boxShadow: "none",
        width: { md: "100%", sm: "100%", xs: "100%" },
        marginTop: 1,
        marginBottom: 1,
        padding: "0px",
        overflow: "hidden",
      }}
    >
      <FormControl fullWidth>
        <Select
          value={value}
          onChange={onChange}
          name={name}
          displayEmpty
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            "& .MuiSelect-select": {
              padding: "20px 10px",
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: "16px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          renderValue={(selected) => {
            if (!selected) {
              return <span style={{ color: "gray" }}>{placeholder}</span>;
            }
            return options.find((option) => option.value === selected)?.label;
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "sales", label: "Sales Information" },
    { value: "feedback", label: "Feedback" },
  ];

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.inquiryType.trim()) {
      newErrors.inquiryType = "Please select an inquiry type";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);

      // Show success message
      setSnackbar({
        open: true,
        message: "Your message has been sent successfully!",
        severity: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // Custom textarea component
  const TextArea = ({ placeholderValue, onChange, value, name, error }) => {
    return (
      <Paper
        sx={{
          borderRadius: "15px",
          border: error ? "1px solid #f44336" : "1px solid gray",
          bgcolor: theme.palette.background.default,
          boxShadow: "none",
          width: { md: "100%", sm: "100%", xs: "100%" },
          marginTop: 1,
          marginBottom: 1,
          padding: "0px",
        }}
      >
        <textarea
          onChange={onChange}
          placeholder={placeholderValue}
          value={value}
          name={name}
          rows={4}
          style={{
            border: "none",
            width: "100%",
            backgroundColor: theme.palette.background.default,
            padding: "20px 10px",
            borderRadius: "15px",
            color: theme.palette.text.primary,
            fontSize: "16px",
            boxSizing: "border-box",
            fontFamily: "inherit",
            resize: "vertical",
          }}
        />
        {error && (
          <Typography
            variant="caption"
            color="error"
            sx={{ pl: 2, pb: 1, display: "block" }}
          >
            {error}
          </Typography>
        )}
      </Paper>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: 5 }}>
      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Typography variant="h5" gutterBottom>
              Send Us a Message
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Have questions or need assistance? Fill out the form below and
              we'll get back to you as soon as possible.
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputField
                    typeValue="text"
                    placeholderValue="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    typeValue="email"
                    placeholderValue="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomDropdown
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    options={inquiryTypes}
                    placeholder="Select Inquiry Type"
                  />
                  {errors.inquiryType && (
                    <Typography variant="caption" color="error" sx={{ pl: 2 }}>
                      {errors.inquiryType}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    typeValue="text"
                    placeholderValue="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextArea
                    placeholderValue="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomStyleButtonComponent
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5, borderRadius: "15px" }}
                    backgroundColor={theme.palette.primary.main}
                    color={theme.palette.background.default}
                    hover={theme.palette.greenBg.main}
                    text={"Submit"}
                    padding={"15px"}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Paper
              sx={{
                p: 3,
                bgcolor: "primary.main",
                color: "white",
                height: "100%",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>

              <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)", my: 2 }} />

              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <EmailIcon sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Email
                    </Typography>
                    <Typography variant="body1">
                      support@yourcompany.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <PhoneIcon sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Phone
                    </Typography>
                    <Typography variant="body1">+1 (123) 456-7890</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <LocationOnIcon sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Office
                    </Typography>
                    <Typography variant="body1">
                      123 Business Street <br />
                      Suite 100 <br />
                      San Francisco, CA 94103
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Hours of Operation
                </Typography>
                <Typography variant="body2">
                  Monday - Friday: 9am - 5pm PST <br />
                  Saturday - Sunday: Closed
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
