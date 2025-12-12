import PropTypes from 'prop-types';
import { Stack, Chip } from '@mui/material';

const ChipGrid = ({ items }) => (
  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
    {items.map((item) => (
      <Chip key={item} label={item} color="default" sx={{ bgcolor: 'rgba(255,255,255,0.06)' }} />
    ))}
  </Stack>
);

ChipGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ChipGrid;
