import styled from '@emotion/styled';
import { Paper } from '@mui/material';

const StyledButtonCategory = styled(Paper)({
  background: '#fff',
  width: '90%',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 15,
  margin: 10,
  transition: '0.2s all',

  '&:hover': {
    transform: 'scale(1.05)',
    cursor: 'pointer',
  },
});

export { StyledButtonCategory };
