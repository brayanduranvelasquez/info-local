import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Local
import InformationSection from './InformationSection';

export default function OfferSection() {
  return (
    <Box sx={{ backgroundColor: 'primary.dark', color: '#fff', textAlign: 'center', paddingY: 10 }}>
      <Container>
        <Stack justifyContent="center" alignItems="center" mb={4}>
          <Typography variant="h4" fontWeight={800}>
            ¿Qué ofrecemos para ti?
          </Typography>
        </Stack>

        <Grid container>
          <InformationSection
            icon={<LocationOnIcon sx={{ fontSize: '70px' }} />}
            message={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus repudiandae officiis ipsum ex dignissimos corrupti rem! Ipsum, ipsam atque voluptatem corporis magni, sed eos optio voluptates eligendi id voluptas!'
            }
          />
          <InformationSection
            icon={<ContactsIcon sx={{ fontSize: '70px' }} />}
            message={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus repudiandae officiis ipsum ex dignissimos corrupti rem! Ipsum, ipsam atque voluptatem corporis magni, sed eos optio voluptates eligendi id voluptas!'
            }
          />
          <InformationSection
            icon={<AccountCircleIcon sx={{ fontSize: '70px' }} />}
            message={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus repudiandae officiis ipsum ex dignissimos corrupti rem! Ipsum, ipsam atque voluptatem corporis magni, sed eos optio voluptates eligendi id voluptas!'
            }
          />
        </Grid>
      </Container>
    </Box>
  );
}
