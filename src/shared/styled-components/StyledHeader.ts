import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const StyledStackLinks = styled(Typography)({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledLinkNav = styled(Typography)({
  fontSize: 20,
  fontWeight: 'bold',

  '&:hover': {
    color: '#888',
    cursor: 'pointer',
  },
});

export { StyledLinkNav, StyledStackLinks };
