import PropTypes from 'prop-types';
import { Card, Stack, Typography, Divider, Box } from '@mui/material';

const SectionCard = ({ title, subtitle, action, children, spacing = 2, dense }) => (
  <Card
    sx={{
      p: dense ? 2 : 3,
      height: '100%',
      backdropFilter: 'blur(12px)',
      backgroundColor: 'rgba(22,22,26,0.9)',
    }}
  >
    {(title || subtitle || action) && (
      <Stack direction="row" alignItems="center" spacing={2} justifyContent="space-between" mb={children ? 2 : 0}>
        <Box>
          {title && (
            <Typography variant="h6" component="div" sx={{ mb: subtitle ? 0.5 : 0 }}>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
        {action}
      </Stack>
    )}
    {title && children && <Divider sx={{ mb: spacing }} />}
    <Stack spacing={spacing}>{children}</Stack>
  </Card>
);

SectionCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  action: PropTypes.node,
  children: PropTypes.node,
  spacing: PropTypes.number,
  dense: PropTypes.bool,
};

export default SectionCard;
