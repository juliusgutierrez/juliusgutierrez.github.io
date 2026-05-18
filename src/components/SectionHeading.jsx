import PropTypes from "prop-types";
import { Box, Stack, Typography } from "@mui/material";

/** Eyebrow + title + optional subtitle, reused by content sections. */
const SectionHeading = ({ eyebrow, title, subtitle, align = "left" }) => (
  <Stack
    spacing={1.5}
    sx={{
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      maxWidth: align === "center" ? 640 : "none",
      mx: align === "center" ? "auto" : 0,
    }}
  >
    {eyebrow && (
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        sx={{ justifyContent: align === "center" ? "center" : "flex-start" }}
      >
        <Box
          sx={{
            width: 3,
            height: 16,
            borderRadius: "2px",
            background: "linear-gradient(180deg, #60a5fa, #38bdf8)",
            flexShrink: 0,
          }}
        />
        <Typography
          variant="overline"
          sx={{ color: "primary.light", fontWeight: 700, letterSpacing: "0.14em" }}
        >
          {eyebrow}
        </Typography>
      </Stack>
    )}
    <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}>
      {title}
    </Typography>
    {subtitle && (
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: "56ch" }}
      >
        {subtitle}
      </Typography>
    )}
  </Stack>
);

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(["left", "center"]),
};

export default SectionHeading;
