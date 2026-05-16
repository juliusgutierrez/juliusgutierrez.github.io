import PropTypes from "prop-types";
import { IconButton, Stack } from "@mui/material";
import { GitHub, LinkedIn, AlternateEmail } from "@mui/icons-material";
import { socials } from "../data";

const iconMap = {
  github: <GitHub fontSize="small" />,
  linkedin: <LinkedIn fontSize="small" />,
  email: <AlternateEmail fontSize="small" />,
};

/** Row of social icon buttons, driven by the `socials` data array. */
const SocialLinks = ({ spacing = 1 }) => (
  <Stack direction="row" spacing={spacing}>
    {socials.map((item) => (
      <IconButton
        key={item.label}
        component="a"
        href={item.link}
        target="_blank"
        rel="noreferrer"
        aria-label={item.label}
        sx={{
          color: "text.secondary",
          border: "1px solid",
          borderColor: "divider",
          "&:hover": { color: "primary.light", borderColor: "primary.main" },
        }}
      >
        {iconMap[item.icon]}
      </IconButton>
    ))}
  </Stack>
);

SocialLinks.propTypes = {
  spacing: PropTypes.number,
};

export default SocialLinks;
