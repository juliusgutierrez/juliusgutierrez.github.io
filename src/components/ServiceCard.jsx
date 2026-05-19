import PropTypes from "prop-types";
import { Box, Card, Stack, Typography } from "@mui/material";
import {
  AccountTree,
  Layers,
  CloudQueue,
  Hub,
} from "@mui/icons-material";

const iconMap = {
  architecture: <AccountTree />,
  fullstack: <Layers />,
  cloud: <CloudQueue />,
  integration: <Hub />,
};

/** Icon + title + description card used in the Services grid. */
const ServiceCard = ({ icon, title, description }) => (
  <Card
    sx={{
      p: 3,
      height: "100%",
      transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
      "&:hover": {
        transform: "translateY(-4px)",
        borderColor: "primary.main",
        boxShadow: "0 8px 32px rgba(59,130,246,0.25)",
      },
    }}
  >
    <Stack spacing={2}>
      <Box
        sx={{
          width: 52,
          height: 52,
          borderRadius: 2,
          display: "grid",
          placeItems: "center",
          color: "primary.light",
          bgcolor: "rgba(148,163,184,0.06)",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        {iconMap[icon]}
      </Box>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Stack>
  </Card>
);

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
