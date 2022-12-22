import styled from '@emotion/styled';
import { Card } from '@mui/material';

const StyledCardLocal = styled(Card)({
  maxWidth: 350,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: 2,
  borderRadius: 7.5,
  transition: '0.3s all',

  '&:hover': {
    transform: 'scale(1.05)',
    cursor: 'pointer',
  },
});

export { StyledCardLocal };
