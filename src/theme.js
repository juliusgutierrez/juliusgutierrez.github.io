import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7c5dff",
    },
    secondary: {
      main: "#f29e38",
    },
    background: {
      default: "#0f0f11",
      paper: "#16161a",
    },
    text: {
      primary: "#f8f8fa",
      secondary: "#c3c3ca",
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: ["Inter", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
    h4: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h6: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    body1: {
      color: "#d6d6de",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #222229",
          boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
        },
      },
    },
    MuiChip: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 700,
          letterSpacing: 0,
        },
      },
    },
  },
});

export default theme;
