import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const StyledLink = styled(Typography)({
  color: '#1976d2',
  fontSize: 26,

  '&:hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});

export { StyledLink };
