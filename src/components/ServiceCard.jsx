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
      transition: "transform 0.2s, border-color 0.2s",
      "&:hover": { transform: "translateY(-4px)", borderColor: "primary.main" },
    }}
  >
    <Stack spacing={2}>
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: 2,
          display: "grid",
          placeItems: "center",
          color: "primary.light",
          backgroundColor: "rgba(59,130,246,0.12)",
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
