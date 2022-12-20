import { Grid, Box, Typography, Button, Card, CardActions, CardContent } from '@mui/material';

import LocalsImg from '../../../shared/assets/logo.png';

interface IProps {
  title: string;
}

export const BoxLocals = (props: IProps) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        elevation={10}
        sx={{
          maxWidth: 345,
          width: '90%',
          height: '90%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          margin: 2,
        }}
      >
        <Box component="img" src={LocalsImg} sx={{ width: '100%', height: '150%' }} />
        <CardContent>
          <Typography variant="h4" fontWeight="bold">
            {props.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
            Ir
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
