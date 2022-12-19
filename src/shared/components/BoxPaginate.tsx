import { Box, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const BoxPaginate = () => {
  return (
    <Box sx={{ minHeight: '100%', color: '#000', textAlign: 'center', paddingY: 5 }}>
      <Button variant="contained" color="inherit" sx={{ marginX: 1 }}>
        <ArrowBackIosIcon />
      </Button>
      <Button variant="contained" color="inherit" sx={{ marginX: 1 }}>
        1
      </Button>
      <Button variant="contained" color="inherit" sx={{ marginX: 1 }}>
        2
      </Button>
      <Button variant="contained" color="inherit" sx={{ marginX: 1 }}>
        3
      </Button>
      <Button variant="contained" color="inherit" sx={{ marginX: 1 }}>
        4
      </Button>
      <Button variant="contained" color="inherit" sx={{ marginX: 1 }}>
        5
      </Button>
      <Button variant="contained" color="inherit" sx={{ marginX: 1 }}>
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  );
};
