import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import backgroundImg from '../assets/background.png';

const StyledStackImg = styled(Stack)({
  maxWidth: '100%',
  height: `calc(100vh - 200px)`,
  background: `url(${backgroundImg}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export { StyledStackImg };
