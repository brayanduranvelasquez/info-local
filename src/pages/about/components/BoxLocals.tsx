import { Grid, Paper, Box, Typography, Button } from '@mui/material';

import LocalsImg from '../../../shared/assets/logo.png';

interface IProps {
  title: string;
}

export const BoxLocals = (props: IProps) => {
  return (
    <Grid item xs={4}>
      <Paper
        elevation={10}
        sx={{
          background: '#fff',
          width: '90%',
          height: '90%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          margin: 2,
          padding: 2,
        }}
      >
        <Box component="img" src={LocalsImg} sx={{ width: '250px', height: '150px' }} />
        <Typography variant="h4" fontWeight="bold">
          {props.title}
        </Typography>
        <Button variant="contained" color="primary">
          Ir
        </Button>
      </Paper>
    </Grid>
  );
};
