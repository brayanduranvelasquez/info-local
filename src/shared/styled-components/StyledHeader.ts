import styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';

const StyledStackLinks = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
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
