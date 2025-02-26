import { createTheme } from "@mui/material/styles";

const darkestBlueTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0088FF", // Electric Blue Accent
    },
    secondary: {
      main: "#00E5FF", // Neon Cyan Accent
    },
    background: {
      default: "#020617", // Deepest Navy (Almost Black)
      paper: "#0A122A", // Dark Blue Panel Color
    },
    text: {
      primary: "#E3E9FF", // Light Bluish-Gray Text
      secondary: "#AAB3D1", // Muted Cool Gray
    },
    warning: {
      main: "#FFB74D", // Soft Amber for Warnings
    },
    divider: "#1A233A", // Darker Blue Dividers
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 600 },
    h3: { fontSize: "1.75rem", fontWeight: 500 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontWeight: "bold",
          padding: "10px 20px",
          backgroundColor: "#0088FF", // Electric Blue
          "&:hover": {
            backgroundColor: "#005FCC", // Darker Electric Blue
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#0A122A",
          padding: "20px",
          borderRadius: "10px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#020617", // Keep AppBar Darkest
        },
      },
    },
  },
});

export default darkestBlueTheme;
