import PropTypes from "prop-types";
import { Box } from "@mui/material";

/** Inline accent span — highlights a single word inside the hero heading. */
const Highlight = ({ children }) => (
  <Box component="span" sx={{ color: "primary.light" }}>
    {children}
  </Box>
);

Highlight.propTypes = {
  children: PropTypes.node,
};

export default Highlight;
