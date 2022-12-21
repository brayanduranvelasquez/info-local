import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

import ChairIcon from '@mui/icons-material/Chair';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CheckroomIcon from '@mui/icons-material/Checkroom';

// Local
import PaperCategory from './PaperCategory';
import { useNavigate } from 'react-router-dom';

export default function CategorySection() {
  const navigate = useNavigate();

  return (
    <Container>
      <Box sx={{ color: '#000', textAlign: 'center', paddingY: 5 }}>
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h3" fontWeight={800}>
            Categorías
          </Typography>
          <Box maxWidth="450px" paddingTop={2}>
            <Typography variant="h5" fontWeight="bold">
              Contamos con una variedad de categorías que puedes consultar
            </Typography>
          </Box>
        </Stack>
        <Grid container direction="row" paddingTop={5}>
          <PaperCategory icon={<ChairIcon sx={{ fontSize: '70px' }} />} title={'Adornos'} url={'/categories/adornos'} />
          <PaperCategory icon={<HomeRepairServiceIcon sx={{ fontSize: '70px' }} />} title={'Repuestos'} />
          <PaperCategory icon={<RestaurantMenuIcon sx={{ fontSize: '70px' }} />} title={'Comidas'} />
          <PaperCategory icon={<CheckroomIcon sx={{ fontSize: '70px' }} />} title={'Vestimenta'} />
        </Grid>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginY: 4 }}
          onClick={() => navigate('/categories/#')}
        >
          Ver más <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Container>
  );
}
