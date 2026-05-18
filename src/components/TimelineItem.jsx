import PropTypes from "prop-types";
import { Box, Stack, Typography } from "@mui/material";

/**
 * A single entry in a vertical timeline: a dot + connecting line on the left,
 * period / title / company / detail bullets / tech stack on the right.
 */
const TimelineItem = ({
  period,
  title,
  company,
  details = [],
  techStack = [],
  last,
}) => (
  <Stack direction="row" spacing={{ xs: 2, sm: 3 }}>
    {/* Connector */}
    <Stack alignItems="center" sx={{ pt: 0.5 }}>
      <Box
        sx={{
          width: 14,
          height: 14,
          borderRadius: "50%",
          flexShrink: 0,
          bgcolor: "primary.main",
        }}
      />
      {!last && (
        <Box sx={{ width: "2px", flexGrow: 1, mt: 1, bgcolor: "divider" }} />
      )}
    </Stack>

    {/* Content */}
    <Stack spacing={0.5} sx={{ pb: last ? 0 : 5 }}>
      <Typography
        variant="caption"
        sx={{ color: "primary.light", fontWeight: 700, letterSpacing: "0.08em" }}
      >
        {period}
      </Typography>
      <Typography variant="h6">{title}</Typography>
      {company && (
        <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600 }}>
          {company}
        </Typography>
      )}

      {details.length > 0 && (
        <Stack
          component="ul"
          spacing={1.25}
          sx={{ listStyle: "none", m: 0, p: 0, mt: 2 }}
        >
          {details.map((detail) => (
            <Stack
              key={detail}
              component="li"
              direction="row"
              spacing={1.5}
              alignItems="flex-start"
            >
              <Box
                sx={{
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  height: "1.6em",
                  fontSize: "0.875rem",
                }}
              >
                <Box
                  sx={{
                    width: 14,
                    height: "2px",
                    borderRadius: 1,
                    bgcolor: "primary.light",
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.6, maxWidth: "62ch" }}
              >
                {detail}
              </Typography>
            </Stack>
          ))}
        </Stack>
      )}

      {techStack.length > 0 && (
        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
            opacity: 0.65,
            letterSpacing: "0.02em",
            lineHeight: 1.7,
            mt: 2,
          }}
        >
          {techStack.join("  ·  ")}
        </Typography>
      )}
    </Stack>
  </Stack>
);

TimelineItem.propTypes = {
  period: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string,
  details: PropTypes.arrayOf(PropTypes.string),
  techStack: PropTypes.arrayOf(PropTypes.string),
  last: PropTypes.bool,
};

export default TimelineItem;
