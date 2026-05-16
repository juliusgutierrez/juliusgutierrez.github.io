import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3b82f6",
      light: "#60a5fa",
      dark: "#2563eb",
    },
    secondary: {
      main: "#38bdf8",
    },
    background: {
      default: "#0a0e17",
      paper: "#10151f",
    },
    text: {
      primary: "#f1f5f9",
      secondary: "#94a3b8",
    },
    divider: "rgba(148,163,184,0.14)",
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: ["Inter", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.15,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h6: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
    body1: {
      color: "#cbd5e1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingInline: 22,
          paddingBlock: 10,
        },
        containedPrimary: {
          boxShadow: "0 10px 28px rgba(59,130,246,0.35)",
        },
        outlined: {
          borderColor: "rgba(148,163,184,0.28)",
          color: "#e2e8f0",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(148,163,184,0.12)",
          backgroundImage:
            "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0))",
          boxShadow: "0 18px 40px rgba(0,0,0,0.4)",
        },
      },
    },
    MuiChip: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          backgroundColor: "rgba(59,130,246,0.12)",
          color: "#bfdbfe",
        },
      },
    },
  },
});

export default theme;
