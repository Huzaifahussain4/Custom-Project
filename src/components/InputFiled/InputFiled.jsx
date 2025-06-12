import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
import "../InputFiled/style.css";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import EditIcon from "@mui/icons-material/Edit";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../../utils/appStyle.css";
import theme from "../../utils/theme";

export function InputFiled({ typeValue, placeholderValue, onChange, value }) {
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: "15px",
        border: "1px solid gray",
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
        style={{
          // outline: "none",
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
    </Paper>
  );
}

export function PhoneNumberField({
  value,
  placeholderValue,
  onChange,
  countryCode,
}) {
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 3,
        border: "none",
        bgcolor: theme.palette.background.default,
        boxShadow: "none",
        width: "100%",
        marginTop: 1,
        padding: "0px",
      }}
      className="customFieldSearchBar"
    >
      <PhoneInput
        country={countryCode} // Set the default country code
        value={value} // Set the phone number value
        onChange={(phone_number, country) => {
          console.log("Phone Number:", phone_number);
          console.log("Country:", country); // Debugging

          if (typeof onChange === "function") {
            onChange(phone_number, country);
          }
        }}
        placeholder={placeholderValue || "Enter phone number"}
        inputStyle={{
          width: "100%",
          backgroundColor: theme.palette.background.default,
          border: "1px solid gray",
          color: theme.palette.text.primary,
          padding: "30px",
          paddingLeft: "55px",
          borderRadius: "15px",
        }}
        buttonStyle={{
          backgroundColor: theme.palette.background.default,
          border: "1px solid gray",
          borderRight: "none",
          borderRadius: "15px 0px 0px 15px",
        }}
        dropdownStyle={{
          height: "100px",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      />
    </Paper>
  );
}

export function CustomFiled({ typeValue, placeholderValue, onChange }) {
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: "15px",
        border: "1px solid gray",
        bgcolor: "#1a1a1a",
        boxShadow: "none",
        width: { md: "100%", sm: "100%", xs: "100%" },
        marginTop: 1,
        padding: "0px",
      }}
    >
      <input
        onChange={onChange}
        type={typeValue}
        placeholder={placeholderValue}
        className="customFieldSearchBar"
        style={{
          // outline: "none",
          border: "none",
          width: "100%",
          backgroundColor: "#1a1a1a",
          padding: "20px 0px 20px 10px",
          borderRadius: "15px",
          color: "#fff",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />
    </Paper>
  );
}

export const SearchField = ({ borderColor, bgcolor, padding }) => {
  // const [searchTerm, setSearchTerm] = useState("");

  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchTerm) {
  //     navigate(`/search/${searchTerm}`);
  //     setSearchTerm("");
  //   }
  // };

  return (
    <Paper
      // component="form"
      // onSubmit={handleSubmit}
      sx={{
        borderRadius: 3,
        pl: 1,
        boxShadow: "none",
        width: { md: "100%", sm: "70%" },
        // mr: { sm: 5, md: 50, xs: 2 },
        display: "flex",
        justifyContent: "space-between",
        bgcolor: bgcolor,
        border: "1px solid",
        borderColor: { borderColor },
      }}
    >
      <input
        // onChange={(e) => setSearchTerm(e.target.value)}
        // value={searchTerm}
        placeholder="Search..."
        className="searchBar"
        style={{
          // padding: "10px",
          border: "none",
          outline: "none",
          width: "90%",
          backgroundColor: bgcolor,
          color: theme.palette.text.primary,
          fontSize: "16px",
        }}
      />
      <IconButton
        type="submit"
        sx={{ p: padding, color: theme.palette.primary.main }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

/**
 * A component that renders an input field with an edit/save button.
 * If `edit` is true, the input field is editable and the button is a save icon.
 * If `edit` is false, the input field is readonly and the button is an edit icon.
 * When the button is clicked, the state of `edit` is toggled.
 *
 * @param {string} typeValue - The type of the input field.
 * @param {string} placeholderValue - The placeholder text of the input field.
 * @param {function} onChange - The function to call when the input field changes.
 * @param {ReactElement} icons - The React element to render as the button.
 * @param {function} onclick - The function to call when the button is clicked.
 * @param {string} fieldValue - The value of the input field.
 * @param {boolean} disabled - Whether the input field is disabled.
 * @param {boolean} edit - Whether the input field is editable.
 */

export function IconsFiled({
  typeValue,
  placeholderValue,
  onChange,
  icons,
  onclick,
  fieldValue,
  disabled,
  edit,
}) {
  const [isEditable, setIsEditable] = useState(false);
  const [inputValue, setInputValue] = useState("Pre-filled text");

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditable((prev) => !prev);
    console.log("Clicked on Edit");
  };

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  return (
    <Paper
      sx={{
        borderRadius: "15px",
        border: "1px solid gray",
        bgcolor: "#1a1a1a",
        boxShadow: "none",
        width: { md: "100%", sm: "100%", xs: "100%" },
        marginTop: 1,
        marginBottom: 1,
        display: "flex",
        justifyContent: "space-between",
        transition: "border-color 0.3s ease",
      }}
      className="inputFieldSearchBar"
    >
      <input
        onChange={onChange}
        type={typeValue}
        value={fieldValue}
        placeholder={placeholderValue}
        disabled={!isEditable}
        style={{
          outline: "none",
          border: "none",
          width: "100%",
          backgroundColor: "#1a1a1a",
          padding: "20px 0 20px 10px",
          borderRadius: "15px",
          color: "#fff",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />
      <IconButton
        type="submit"
        onClick={handleEditClick}
        sx={{ p: "10px", color: "rgb(145,18,190)" }}
      >
        {isEditable ? <SaveAltIcon /> : <EditIcon />}
      </IconButton>
    </Paper>
  );
}

export function OtpFields({ spanText, typeValue, placeholder, onChange }) {
  return (
    <>
      <span
        style={{
          color: "white",
          width: "50%",
          marginTop: "20px",
          fontWeight: "300",
        }}
      >
        {spanText}
      </span>
      <Paper
        sx={{
          borderRadius: "15px",
          border: "2px solid rgb(187, 0, 255)",
          bgcolor: "rgba(0, 0, 0, 0.2)",
          boxShadow: "none",
          width: { md: "100%", sm: "100%", xs: "100%" },
          marginTop: 1,
        }}
      >
        <input
          onChange={onChange}
          type={typeValue}
          placeholder={placeholder}
          style={{
            border: "none",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            padding: "20px 0px 20px 10px",
            borderRadius: "12px",
            color: "#fff",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />
      </Paper>
    </>
  );
}
