import PropTypes from "prop-types";
import { Box } from "@mui/material";

/** Inline gradient-text accent span — highlights a word inside a heading. */
const Highlight = ({ children }) => (
  <Box
    component="span"
    sx={{
      background: "linear-gradient(90deg, #60a5fa, #38bdf8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    {children}
  </Box>
);

Highlight.propTypes = {
  children: PropTypes.node,
};

export default Highlight;
