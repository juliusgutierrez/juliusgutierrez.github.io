import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Card, Chip, Stack, Typography } from "@mui/material";

/**
 * Image + title + description + tags card for the Projects grid.
 * Falls back to a gradient placeholder when the image is missing.
 */
const ProjectCard = ({ title, description, image, tags }) => {
  const [imgOk, setImgOk] = useState(true);

  return (
    <Card
      sx={{
        height: "100%",
        overflow: "hidden",
        transition: "transform 0.2s, border-color 0.2s",
        "&:hover": { transform: "translateY(-4px)", borderColor: "primary.main" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          aspectRatio: "16 / 10",
          background: "linear-gradient(135deg, #1e293b, #0f172a)",
          display: "grid",
          placeItems: "center",
        }}
      >
        {imgOk && image ? (
          <Box
            component="img"
            src={image}
            alt={title}
            onError={() => setImgOk(false)}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Typography sx={{ fontWeight: 800, fontSize: 40, color: "primary.light", opacity: 0.5 }}>
            {title.charAt(0)}
          </Typography>
        )}
      </Box>
      <Stack spacing={1.5} sx={{ p: 3 }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
