import { Box, Grid, Stack, Typography, Button, TextField, Container } from '@mui/material';

// Local
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import Breadcrumb from './components/Breadcrumb';

export default function AboutPage() {
  return (
    <>
      <Container>
        <Breadcrumb />
      </Container>

      <Container>
        <Box sx={{ paddingBottom: 5 }}>
          <Grid container direction="row" textAlign="center">
            <Grid item xs={12} lg={6}>
              <Stack justifyContent="center" alignItems="center" padding={3}>
                <Box component="img" src={image1} maxWidth="100%" loading="lazy" sx={{ maxWidth: 450 }} />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center" alignItems="center">
              <Stack justifyContent="center" alignItems="center" gap={2}>
                <Typography variant="h3" fontWeight={500}>
                  ¿Quiénes somos?
                </Typography>
                <Box sx={{ maxWidth: '550px' }}>
                  <Container>
                    <Typography variant="h5" fontWeight={500}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra,
                      feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
                      suscipit non. Non commodo volutpat, pharetra, vel. Lorem ipsum dolor sit amet.
                    </Typography>
                  </Container>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box sx={{ backgroundColor: 'primary.dark', paddingY: 7 }}>
        <Container>
          <Stack justifyContent="center" alignItems="center">
            <Box sx={{ width: '80%', background: 'white', paddingY: 3, borderRadius: 1 }}>
              <Grid container direction="row" sx={{ height: '100%' }}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                  <Box
                    sx={{
                      padding: 2,
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography fontSize="50px" fontWeight="bold" sx={{ color: '#1769AA' }}>
                      30+
                    </Typography>
                    <Typography fontWeight="bold">Clientes satisfechos</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                  <Box
                    sx={{
                      padding: 2,
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography fontSize="50px" fontWeight="bold" sx={{ color: '#1769AA' }}>
                      100+
                    </Typography>
                    <Typography fontWeight="bold">Locales registrados</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                  <Box
                    sx={{
                      padding: 2,
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography fontSize="50px" fontWeight="bold" sx={{ color: '#1769AA' }}>
                      20+
                    </Typography>
                    <Typography fontWeight="bold">Categorías Registradas</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container>
        <Box sx={{ paddingY: 5 }}>
          <Grid container direction="row" textAlign="center">
            <Grid item xs={12} lg={6} display="flex" justifyContent="center" alignItems="center">
              <Stack justifyContent="center" alignItems="center" gap={2}>
                <Typography variant="h3" fontWeight={500}>
                  Lorem Lorem
                </Typography>
                <Box sx={{ maxWidth: '550px' }}>
                  <Container>
                    <Typography variant="h5" fontWeight={500}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra,
                      feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
                      suscipit non. Non commodo volutpat.
                    </Typography>
                  </Container>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack justifyContent="center" alignItems="center" padding={3}>
                <Box component="img" src={image2} width="100%" loading="lazy" sx={{ maxWidth: 450 }} />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box sx={{ backgroundColor: 'primary.dark', paddingY: 7 }}>
        <Container>
          <Stack justifyContent="center" alignItems="center">
            <Typography variant="h3" fontWeight={800} color="white" textAlign="center">
              Descarga nuestra guía para saber más sobre nuestros servicios
            </Typography>
            <Button variant="contained" color="inherit" sx={{ marginY: 3, background: '#fff', color: '#1769AA' }}>
              Descargar
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container>
        <Box sx={{ paddingY: 5 }}>
          <Grid container direction="row" textAlign="center">
            <Grid item xs={12} lg={6}>
              <Stack justifyContent="center" alignItems="center" padding={3}>
                <Box component="img" src={image3} width="100%" loading="lazy" sx={{ maxWidth: 450 }} />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center" alignItems="center">
              <Stack justifyContent="center" alignItems="center" gap={2}>
                <Typography variant="h3" fontWeight={500}>
                  Sit Amet
                </Typography>
                <Box sx={{ maxWidth: '550px' }}>
                  <Container>
                    <Typography variant="h5" fontWeight={500}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra,
                      feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
                      suscipit non. Non commodo volutpat, pharetra, vel. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus.
                    </Typography>
                  </Container>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box sx={{ backgroundColor: 'primary.dark', color: '#fff', paddingY: 5 }}>
        <Container>
          <Grid container direction="row">
            <Grid item xs={12} md={6}>
              <Stack marginTop={3}>
                <Typography variant="h2" fontWeight={800}>
                  Suscríbete
                </Typography>
                <Box sx={{ maxWidth: '550px' }}>
                  <Typography variant="h5" fontWeight={500}>
                    Suscribete a nuestro sitio web para estar al dia de nuestros servicios
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack marginTop={3}>
                <Typography variant="h4" fontWeight={800}>
                  Correo electrónico
                </Typography>
                <Box sx={{ gap: 2, width: '80%' }}>
                  <TextField
                    placeholder="Ingrese su correo electronico"
                    sx={{ background: '#fff', borderRadius: '5px', maxWidth: '600px' }}
                    fullWidth
                  />
                </Box>
              </Stack>
              <Button variant="contained" color="inherit" sx={{ marginY: 3, background: '#fff', color: '#1769AA' }}>
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
