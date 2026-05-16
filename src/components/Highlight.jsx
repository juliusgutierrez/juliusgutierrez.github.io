import PropTypes from "prop-types";
import { Box } from "@mui/material";

/** Inline accent span — color-highlights a word inside a heading. */
const Highlight = ({ children }) => (
  <Box component="span" sx={{ color: "primary.light" }}>
    {children}
  </Box>
);

Highlight.propTypes = {
  children: PropTypes.node,
};

export default Highlight;
