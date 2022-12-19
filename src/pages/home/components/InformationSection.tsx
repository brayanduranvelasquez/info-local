import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

interface IProps {
  icon: JSX.Element;
  message: string;
}

export default function InformationSection(props: IProps) {
  return (
    <Grid item xs={12} md={3} display="flex" justifyContent="center" alignItems="center">
      <Box
        sx={{
          padding: 2,
          minWidth: '200px',
          height: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {props.icon}
        <Typography>{props.message}</Typography>
      </Box>
    </Grid>
  );
}
