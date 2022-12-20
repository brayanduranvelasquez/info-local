import { Box, Button, Grid, Stack, Typography, Divider } from '@mui/material';
import Header from '../../shared/components/Header';
import InputSearch from '../../shared/components/InputSearch';
import { StyledStackImg } from './styled-components/StyledStackImg';
import PaperCategory from './components/PaperCategory';
import InformationSection from './components/InformationSection';
import RegistroImg from './assets/registro.png';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from '../../shared/components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <StyledStackImg>
        <Stack justifyContent="center" alignItems="center" sx={{ minHeight: '100%', color: '#fff' }}>
          <Typography variant="h2" fontWeight={800} sx={{ paddingBottom: 2 }}>
            InfoLocal
          </Typography>
          <InputSearch />
        </Stack>
      </StyledStackImg>

      <Box sx={{ minHeight: '100%', color: '#000', textAlign: 'center', paddingY: 10 }}>
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h3" fontWeight={800}>
            Categorias
          </Typography>
          <Box maxWidth="450px" paddingTop={2}>
            <Typography variant="h5" fontWeight="bold">
              Contamos con una variedad de categorías que puedes consultar
            </Typography>
          </Box>
        </Stack>
        <Grid container direction="row" paddingTop={7}>
          <PaperCategory icon={<LocalHospitalIcon sx={{ fontSize: '70px' }} />} title={'Farmacias'} />
          <PaperCategory icon={<HomeRepairServiceIcon sx={{ fontSize: '70px' }} />} title={'Repuestos'} />
          <PaperCategory icon={<RestaurantMenuIcon sx={{ fontSize: '70px' }} />} title={'Comida'} />
          <PaperCategory icon={<CheckroomIcon sx={{ fontSize: '70px' }} />} title={'Vestimenta'} />
        </Grid>
        <Button variant="contained" color="primary" size="large" sx={{ marginY: 4 }}>
          Ver más <ArrowForwardIosIcon />
        </Button>
      </Box>

      <Box sx={{ minHeight: '100%', background: '#1769AA', color: '#fff', textAlign: 'center', paddingY: 10 }}>
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h3" fontWeight={800}>
            ¿Que ofrecemos para ti?
          </Typography>
        </Stack>
        <Grid container direction="row" paddingTop={7} paddingX={2}>
          <InformationSection
            icon={<LocationOnIcon sx={{ fontSize: '70px' }} />}
            message={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus repudiandae officiis ipsum ex dignissimos corrupti rem! Ipsum, ipsam atque voluptatem corporis magni, sed eos optio voluptates eligendi id voluptas!'
            }
          />
          <Grid item md={1.5} sx={{ display: { xs: 'none', md: 'flex' } }} justifyContent="center" alignItems="center">
            <Divider orientation="vertical" sx={{ borderRight: '2px solid #fff' }} />
          </Grid>
          <InformationSection
            icon={<ContactsIcon sx={{ fontSize: '70px' }} />}
            message={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus repudiandae officiis ipsum ex dignissimos corrupti rem! Ipsum, ipsam atque voluptatem corporis magni, sed eos optio voluptates eligendi id voluptas!'
            }
          />
          <Grid item md={1.5} sx={{ display: { xs: 'none', md: 'flex' } }} justifyContent="center" alignItems="center">
            <Divider orientation="vertical" sx={{ borderRight: '2px solid #fff' }} />
          </Grid>
          <InformationSection
            icon={<AccountCircleIcon sx={{ fontSize: '70px' }} />}
            message={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus repudiandae officiis ipsum ex dignissimos corrupti rem! Ipsum, ipsam atque voluptatem corporis magni, sed eos optio voluptates eligendi id voluptas!'
            }
          />
        </Grid>
      </Box>

      <Box sx={{ minHeight: '100%', color: '#000', textAlign: 'center', paddingY: 10 }}>
        <Grid container direction="row" paddingTop={7}>
          <Grid item xs={12} lg={6} display="flex" justifyContent="center" alignItems="center">
            <Stack justifyContent="center" alignItems="center" gap={2}>
              <Typography variant="h3" fontWeight={500}>
                ¿Como puedo registrar mi empresa, local, negocio o emprendimiento?
              </Typography>
              <Button variant="contained" color="primary" size="large">
                Realizar registro
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack justifyContent="center" alignItems="center" padding={3}>
              <Box component="img" src={RegistroImg} width="100%" />
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
}
