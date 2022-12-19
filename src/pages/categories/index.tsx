import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import InputSearch from '../../shared/components/InputSearch';
import BoxCategory from './components/BoxCategory';
import { BoxPaginate } from '../../shared/components/BoxPaginate';

export default function Page() {
  return (
    <>
      <Header />

      <Box sx={{ minHeight: '100%', color: '#000', paddingY: 5 }}>
        <Container>
          <Typography variant="h6" fontWeight={500}>
            Actualmente te encuentras en: Inicio / Categorias
          </Typography>
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

      <BoxPaginate />

      <Footer />
    </>
  );
}
