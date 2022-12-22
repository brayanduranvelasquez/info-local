import { Box, Grid, Stack, Typography, Divider, Container, Skeleton } from '@mui/material';
import Carousel from 'react-multi-carousel';
import { useState } from 'react';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

// Local
import IconBox from './components/IconBox';
import SocialMedia from './components/SocialMedia';
import Breadcrumb from './components/Breadcrumb';
import { RESPONSIVE } from './consts/RESPONSIVE';

import imageExample1 from './assets/1.jpg';
import imageExample2 from './assets/2.jpg';
import imageExample3 from './assets/3.jpg';

export default function CasaDelCuadroPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      {isLoading && <Skeleton variant="rectangular" animation="wave" sx={{ height: '100vh', maxHeight: 650 }} />}
      {!isLoading && (
        <Carousel responsive={RESPONSIVE}>
          <Box height="100vh" maxHeight={650} sx={{ backgroundImage: `url(${imageExample1})` }} />
          <Box height="100vh" maxHeight={650} sx={{ backgroundImage: `url(${imageExample2})` }} />
          <Box height="100vh" maxHeight={650} sx={{ backgroundImage: `url(${imageExample3})` }} />
        </Carousel>
      )}

      <Container sx={{ marginY: 3 }}>
        <Breadcrumb />

        <Divider sx={{ marginTop: 3 }} />

        <Stack direction="row" my={3} columnGap={1} flexWrap="wrap">
          <Typography variant="h4" fontWeight="bold">
            Casa del cuadro -
          </Typography>

          <Typography variant="h4" fontWeight="bold" color="gray">
            En Maturín
          </Typography>
        </Stack>

        <Stack direction="row" my={4}>
          <Typography variant="h5">
            Somos una tienda con pocos años. Vendemos todo tipo de cuadros, ya sea para salas, cocinar, alrededores u
            otro espacios. 100% garantizado. ¿Deseas comprar un cuadro? nosotros lo tenemos.
          </Typography>
        </Stack>

        <IconBox
          icon={<HomeRepairServiceIcon fontSize="large" />}
          message="Calle El Paraiso, edificio Las Palmeras, Maturin, Monagas. "
        />
        <IconBox icon={<HomeRepairServiceIcon fontSize="large" />} message="De 7:00am a 12pm y de 2pm a 7:00pm" />
        <IconBox icon={<HomeRepairServiceIcon fontSize="large" />} message="Efectivo, transferencia, pago movil." />
        <IconBox icon={<HomeRepairServiceIcon fontSize="large" />} message="Números de telefonos: (0412) 123 4567." />
        <IconBox icon={<HomeRepairServiceIcon fontSize="large" />} message="Correos electrónicos: example@gmail.com" />

        <Divider sx={{ marginTop: 3 }} />

        <Grid container>
          <SocialMedia icon={<FacebookIcon fontSize="large" />} message={'Ir a Facebook'} />
          <SocialMedia icon={<InstagramIcon fontSize="large" />} message={'Ir a Instagram'} />
          <SocialMedia icon={<WhatsAppIcon fontSize="large" />} message={'Ir a WhatsApp'} />
          <SocialMedia icon={<TwitterIcon fontSize="large" />} message={'Ir a Twitter'} />
          <SocialMedia icon={<YouTubeIcon fontSize="large" />} message={'Ir a Youtube'} />
        </Grid>
      </Container>

      <Box component="img" src={imageExample1} display={'none'} onLoad={() => setIsLoading(false)} />
      <Box component="img" src={imageExample2} display={'none'} onLoad={() => setIsLoading(false)} />
      <Box component="img" src={imageExample3} display={'none'} onLoad={() => setIsLoading(false)} />
    </>
  );
}
