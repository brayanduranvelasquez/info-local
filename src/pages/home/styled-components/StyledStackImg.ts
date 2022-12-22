import styled from '@emotion/styled';
import { Stack } from '@mui/material';

// Local
import backgroundImg from '../assets/background.png';

const StyledStackImg = styled(Stack)(({ theme }: any) => ({
  maxWidth: '100%',
  height: `calc(100vh - 200px)`,
  maxHeight: '550px',
  background: `url(${backgroundImg}) no-repeat`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  [theme.breakpoints.down('md')]: {
    height: `calc(100vh - 350px)`,
    backgroundAttachment: 'initial',
  },
}));

export { StyledStackImg };
