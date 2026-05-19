import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Card, Chip, Stack, Typography } from "@mui/material";

/**
 * Image + title + description + tags card for the Projects grid.
 * Falls back to a styled dot-grid placeholder when the image is missing.
 */
const ProjectCard = ({ title, description, image, tags }) => {
  const [imgOk, setImgOk] = useState(true);

  return (
    <Card
      sx={{
        height: "100%",
        overflow: "hidden",
        transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "primary.main",
          boxShadow: "0 8px 32px rgba(59,130,246,0.2)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          aspectRatio: "16 / 10",
          overflow: "hidden",
          background: "linear-gradient(135deg, #1a2744 0%, #0f172a 100%)",
          backgroundImage:
            "linear-gradient(135deg, #1a2744 0%, #0f172a 100%), radial-gradient(rgba(59,130,246,0.15) 1px, transparent 1px)",
          backgroundSize: "auto, 24px 24px",
          backgroundBlendMode: "normal",
          display: "grid",
          placeItems: "center",
        }}
      >
        {/* Dot grid texture layer */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(59,130,246,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {imgOk && image ? (
          <Box
            component="img"
            src={image}
            alt={title}
            onError={() => setImgOk(false)}
            sx={{ position: "relative", width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Typography
            aria-hidden
            sx={{
              position: "relative",
              fontWeight: 800,
              fontSize: 52,
              color: "rgba(96,165,250,0.55)",
              lineHeight: 1,
            }}
          >
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
