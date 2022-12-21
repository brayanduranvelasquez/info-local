import { Container, Grid, Pagination, Stack, Typography } from '@mui/material';

// Local
import InputSearch from '../../../../../../shared/components/InputSearch';
import CardLocal from './components/CardLocal';
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

export default function CuadrosPage() {
  return (
    <>
      <Container>
        <Breadcrumb />
        <Typography variant="h4" fontWeight={800}>
          Resultados encontrados (10+)
        </Typography>

        <Stack justifyContent="center" alignItems="center" sx={{ minHeight: '100%', marginY: 5 }}>
          <InputSearch />
        </Stack>

        <Grid container direction="row">
          <CardLocal title={'Casa del cuadro'} img={Local1IMG} url={'/categories/adornos/cuadros/casa-del-cuadro'} />
          <CardLocal title={'Mi palacio'} img={Local2IMG} />
          <CardLocal title={'ExpoHogar'} img={Local3IMG} />
          <CardLocal title={'Hogareño'} img={Local4IMG} />
          <CardLocal title={'Traki'} img={Local5IMG} />
          <CardLocal title={'MixHouse'} img={Local6IMG} />
          <CardLocal title={'El castillo del cuadro'} img={Local7IMG} />
          <CardLocal title={'Arte creativo'} img={Local8IMG} />
          <CardLocal title={'DecoraTuHogar'} img={Local9IMG} />
        </Grid>
      </Container>

      <Stack justifyContent="center" alignItems="center" my={5}>
        <Pagination count={10} variant="outlined" shape="rounded" size="large" />
      </Stack>
    </>
  );
}
