import { Box, Container, Grid, Pagination, Stack, Typography } from '@mui/material';
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import InputSearch from '../../shared/components/InputSearch';
import { BoxLocals } from './components/BoxLocals';
import Breadcrumb from './components/Breadcrumb';

import Local1IMG from './assets/local1.png';
import Local2IMG from './assets/local2.png';
import Local3IMG from './assets/local3.png';
import Local4IMG from './assets/local4.png';
import Local5IMG from './assets/local5.png';
import Local6IMG from './assets/local6.png';
import Local7IMG from './assets/local7.png';
import Local8IMG from './assets/local8.png';
import Local9IMG from './assets/local9.png';

export default function Page() {
  return (
    <>
      <Header />

      <Box sx={{ minHeight: '100%', color: '#000', paddingY: 5 }}>
        <Container>
          <Breadcrumb />
          <Typography variant="h4" fontWeight={800}>
            Resultados encontrados (10+)
          </Typography>

          <Stack justifyContent="center" alignItems="center" sx={{ minHeight: '100%', marginY: 5 }}>
            <InputSearch />
          </Stack>

          <Grid container direction="row">
            <BoxLocals title={'Casa del cuadro'} img={Local1IMG} url={'/casa-del-cuadro'} />
            <BoxLocals title={'Me cuadra'} img={Local2IMG} url={'/'} />
            <BoxLocals title={'ExpoHogar'} img={Local3IMG} url={'/'} />
            <BoxLocals title={'Hogareño'} img={Local4IMG} url={'/'} />
            <BoxLocals title={'Traki'} img={Local5IMG} url={'/'} />
            <BoxLocals title={'MixHouse'} img={Local6IMG} url={'/'} />
            <BoxLocals title={'El castillo del cuadro'} img={Local7IMG} url={'/'} />
            <BoxLocals title={'Arte creativo'} img={Local8IMG} url={'/'} />
            <BoxLocals title={'DecoraTuHogar'} img={Local9IMG} url={'/'} />
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
