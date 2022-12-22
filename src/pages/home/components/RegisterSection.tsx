import { Box, Button, Grid, Stack, Typography } from '@mui/material';

// Local
import registerImg from '../assets/register.png';

export default function RegisterSection() {
  return (
    <Grid container sx={{ paddingY: 5 }}>
      <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        <Stack justifyContent="center" alignItems="center" textAlign="center">
          <Box paddingX={4} paddingY={2} width="100%" maxWidth={700}>
            <Typography variant="h4" fontWeight={500}>
              ¿Cómo puedo registrar mi empresa, local, negocio o emprendimiento?
            </Typography>
          </Box>
          <Box>
            <Button variant="contained" color="primary" size="large">
              Realizar registro
            </Button>
          </Box>
        </Stack>
      </Grid>

      <Grid item xs={12} md={6}>
        <Stack justifyContent="center" alignItems="center" padding={3}>
          <Box component="img" src={registerImg} width="100%" loading="lazy" sx={{ maxWidth: 450 }} />
        </Stack>
      </Grid>
    </Grid>
  );
}
