import { Typography, Container, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Local
import { StyledDivider, StyledFooter, StyledLink } from '../styled-components/StyledFooter';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <StyledFooter>
      <Container>
        <Typography fontWeight="bold" fontSize={30}>
          InfoLocal
        </Typography>

        <Stack flexDirection="row" justifyContent="center" alignItems="center" gap={2} my={2}>
          <StyledLink onClick={() => navigate('/about')}>Acerca de</StyledLink>
          <StyledLink onClick={() => navigate('/politics')}>Políticas de Privacidad</StyledLink>
        </Stack>

        <StyledDivider />

        <Typography fontWeight="bold" color="#c9c9c9">
          © 2022 InfoLocal
        </Typography>
      </Container>
    </StyledFooter>
  );
}
