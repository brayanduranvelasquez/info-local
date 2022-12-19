import { Box, Grid, Paper, Typography } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface IProps {
  title: string;
}

export default function BoxCategory(props: IProps) {
  return (
    <Grid item xs={12} md={6}>
      <Paper
        elevation={10}
        sx={{
          background: '#fff',
          width: '90%',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          margin: 2,
        }}
      >
        <Box sx={{ width: '10%' }}></Box>
        <Typography variant="h4" fontWeight="bold" sx={{ width: '100%', textAlign: 'center' }}>
          {props.title}
        </Typography>
        <ArrowForwardIosIcon
          sx={{ fontSize: '30px', width: '10%', marginLeft: 2, display: 'flex', justifyContent: 'flex-end' }}
        />
      </Paper>
    </Grid>
  );
}
