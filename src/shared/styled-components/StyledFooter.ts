import styled from '@emotion/styled';
import { Stack, Typography, Divider } from '@mui/material';

const StyledFooter = styled(Stack)({
  background: '#000',
  color: '#fff',
  textAlign: 'center',
  paddingTop: 40,
  paddingBottom: 40,
});

const StyledLink = styled(Typography)({
  '&:hover': {
    color: '#999',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});

const StyledDivider = styled(Divider)({
  background: '#333',
  marginBottom: 15,
});

export { StyledFooter, StyledLink, StyledDivider };
