import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import InputSearch from '../../shared/components/InputSearch';
import { BoxPaginate } from '../../shared/components/BoxPaginate';
import { BoxLocals } from './components/BoxLocals';

export default function Page() {
  return (
    <>
      <Header />

      <Box sx={{ minHeight: '100%', color: '#000', paddingY: 5 }}>
        <Container>
          <Typography variant="h6" fontWeight={500}>
            Actualmente te encuentras en: Inicio / Categorias / Cuadros
          </Typography>
          <Typography variant="h4" fontWeight={800}>
            Resultados encontrados (10+)
          </Typography>

          <Stack justifyContent="center" alignItems="center" sx={{ minHeight: '100%', marginY: 5 }}>
            <InputSearch />
          </Stack>

          <Grid container direction="row">
            <BoxLocals title={'Decora tu hogar'} />
            <BoxLocals title={'Decora tu hogar'} />
            <BoxLocals title={'Decora tu hogar'} />
            <BoxLocals title={'Decora tu hogar'} />
            <BoxLocals title={'Decora tu hogar'} />
            <BoxLocals title={'Decora tu hogar'} />
          </Grid>
        </Container>
      </Box>

      <BoxPaginate />

      <Footer />
    </>
  );
}
