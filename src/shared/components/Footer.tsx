import { Typography, Box } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Box sx={{ minHeight: '100%', background: '#000', color: '#fff', textAlign: 'center', paddingY: 2 }}>
      <Typography fontWeight="bold" fontSize="30px">
        InfoLocal
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingY: 4,
          color: '#c9c9c9',
          gap: 2,
        }}
      >
        <Typography>Acerca de</Typography>
        <Typography>Politicas de Privacidad</Typography>
        <Typography>Ayuda</Typography>
      </Box>
      <Box>
        <Typography fontWeight="bold" color="#c9c9c9">
          © 2022 InfoLocal
        </Typography>
      </Box>
    </Box>
  );
}
