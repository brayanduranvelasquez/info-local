import { Box, Container, Grid, Pagination, Stack, Typography } from '@mui/material';

// Local
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import InputSearch from '../../shared/components/InputSearch';
import BoxCategory from './components/BoxCategory';
import Breadcrumb from './components/Breadcrumb';

export default function CategoriesPage() {
  return (
    <>
      <Header />

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
            <BoxCategory title={'Adornos'} />
            <BoxCategory title={'Repuestos'} />
            <BoxCategory title={'Comida'} />
            <BoxCategory title={'Medicina'} />
            <BoxCategory title={'Vestimenta'} />
            <BoxCategory title={'Electrodomesticos'} />
            <BoxCategory title={'Eventos'} />
            <BoxCategory title={'Arte'} />
            <BoxCategory title={'Ferreteria'} />
            <BoxCategory title={'Sonido'} />
          </Grid>
        </Container>
      </Box>

      <Stack justifyContent="center" alignItems="center" my={5}>
        <Pagination count={10} variant="outlined" shape="rounded" size="large" />
      </Stack>

      <Footer />
    </>
  );
}
