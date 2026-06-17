import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6C25FF",
    },
  },

  typography: {
    fontFamily: "var(--font-rubik)",
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          height: 46,
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;