import PropTypes from "prop-types";
import { Box, Stack, Typography } from "@mui/material";

/**
 * A single entry in a vertical timeline: a dot + connecting line on the left,
 * period / title / company / description on the right.
 */
const TimelineItem = ({ period, title, company, description, last }) => (
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
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {description}
        </Typography>
      )}
    </Stack>
  </Stack>
);

TimelineItem.propTypes = {
  period: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string,
  description: PropTypes.string,
  last: PropTypes.bool,
};

export default TimelineItem;
