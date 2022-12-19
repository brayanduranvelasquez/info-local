import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import FondoImg from '../assets/fondo.png';

const StyledStackImg = styled(Stack)({
  maxWidth: '100%',
  height: `calc(100vh - 200px)`,
  background: `url(${FondoImg}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export { StyledStackImg };
