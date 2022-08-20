import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#C71585",
    },
    secondary: {
      main: "#D8BFD8",
    },
    background: {
      default: "blue",
    },
  },
  typography: {
    fontFamily: "cursive",
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: "cursive",
  },
  palette: {
    primary: {
      main: "#2a1002",
    },
    secondary: {
      main: "#4500e6",
    },
    mode: "dark",
  },
});

export default theme;
