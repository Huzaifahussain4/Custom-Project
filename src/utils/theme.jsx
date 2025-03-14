import { createTheme } from "@mui/material/styles";
import colors from "./colors";

const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    greenBg: { main: colors.greenBg },
    error: { main: colors.error },
    warning: { main: colors.warning },
    info: { main: colors.info },
    background: { default: colors.background, light: colors.background_light },
    hover: { main: colors.hover },
    text: { primary: colors.textPrimary, secondary: colors.textSecondary },
  },
});

export default theme;
