import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
  },
});

export const themeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000",
    },
  },
});
