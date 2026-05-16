import PropTypes from "prop-types";
import { Box, Container } from "@mui/material";

/**
 * Page section wrapper providing consistent vertical rhythm, a scroll anchor,
 * and a centered max-width container.
 */
const Section = ({ id, children, maxWidth = "lg", sx, containerSx }) => (
  <Box
    id={id}
    component="section"
    sx={{ py: { xs: 7, md: 12 }, scrollMarginTop: "72px", ...sx }}
  >
    <Container maxWidth={maxWidth} sx={containerSx}>
      {children}
    </Container>
  </Box>
);

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  maxWidth: PropTypes.string,
  sx: PropTypes.object,
  containerSx: PropTypes.object,
};

export default Section;
