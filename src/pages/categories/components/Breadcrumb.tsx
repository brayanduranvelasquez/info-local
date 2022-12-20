import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledLink } from '../../../shared/styled-components/StyledLink';

export default function Breadcrumb() {
  const navigate = useNavigate();

  return (
    <Stack direction="row" my={3} columnGap={1} flexWrap="wrap">
      <Typography variant="h5" fontWeight="bold">
        Actualmente te encuentras en:
      </Typography>

      <StyledLink variant="h5" fontWeight="bold" onClick={() => navigate('/')}>
        Inicio
      </StyledLink>

      <Typography variant="h5" fontWeight="bold">
        /
      </Typography>

      <Typography variant="h5" fontWeight="bold">
        Categorías
      </Typography>
    </Stack>
  );
}
