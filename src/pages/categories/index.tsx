import { Box, Container, Grid, Pagination, Stack, Typography } from '@mui/material';

// Local
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import InputSearch from '../../shared/components/InputSearch';
import ButtonCategory from './components/ButtonCategory';
import Breadcrumb from './components/Breadcrumb';

export default function CategoriesPage() {
  return (
    <>
      <Box sx={{ minHeight: '100%', color: '#000' }}>
        <Container>
          <Breadcrumb />

          <Typography variant="h4" fontWeight={800}>
            Todas las Categorías (30+)
          </Typography>

          <Stack justifyContent="center" alignItems="center" sx={{ minHeight: '100%', marginY: 5 }}>
            <InputSearch />
          </Stack>

          <Grid container direction="row">
            <ButtonCategory title={'Adornos'} url={'/categories/adornos'} />
            <ButtonCategory title={'Repuestos'} url={'/categories/repuestos'} />
            <ButtonCategory title={'Comida'} url={'/categories/comida'} />
            <ButtonCategory title={'Medicina'} url={'/categories/medicina'} />
            <ButtonCategory title={'Vestimenta'} url={'/categories/vestimenta'} />
            <ButtonCategory title={'Electrodomésticos'} url={'/categories/electrodomesticos'} />
            <ButtonCategory title={'Eventos'} url={'/categories/eventos'} />
            <ButtonCategory title={'Arte'} url={'/categories/arte'} />
            <ButtonCategory title={'Ferretería'} url={'/categories/ferreteria'} />
            <ButtonCategory title={'Sonido'} url={'/categories/sonido'} />
          </Grid>
        </Container>
      </Box>

      <Stack justifyContent="center" alignItems="center" my={5}>
        <Pagination count={10} variant="outlined" shape="rounded" size="large" />
      </Stack>
    </>
  );
}
