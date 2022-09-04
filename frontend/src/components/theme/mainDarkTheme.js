import { createTheme } from "@mui/material";

const typography = {
  h1: {
    fontFamily: "Poppins",
  },
  h2: {
    fontFamily: "Poppins",
  },
  h3: {
    fontFamily: "Poppins",
  },
  h4: {
    fontFamily: "Poppins",
  },
  h5: {
    fontFamily: "Poppins",
  },
  h6: {
    fontFamily: "Poppins",
  },
};

const palette = {
  type: "dark",
  primary: {
    main: "#100C0C",
    light: "#DDDDDD",
    contrastText: "rgba(255,255,255,1)",
  },
  secondary: {
    main: "#564F4F",
  },
  background: {
    default: "#3C3C3C",
  },
  success: {
    main: "#3AB14D",
    contrastText: "#FFFFFF",
  },
};

export const mainDarkTheme = createTheme({
  typography: typography,
  palette: palette
});