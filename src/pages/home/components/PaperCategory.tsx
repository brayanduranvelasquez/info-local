import { Paper, Typography, Button, Grid } from '@mui/material';

interface IProps {
  icon: JSX.Element;
  title: string;
}

export default function PaperCategory(props: IProps) {
  return (
    <Grid item xs={12} sm={6} lg={3} display="flex" justifyContent="center" alignItems="center">
      <Paper
        elevation={10}
        sx={{
          background: '#fff',
          padding: 3,
          margin: 2,
          minWidth: '250px',
          height: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {props.icon}
        <Typography fontSize="30px" fontWeight="bold">
          {props.title}
        </Typography>
        <Button variant="outlined" color="primary" sx={{ marginY: 2 }}>
          Ver listado
        </Button>
      </Paper>
    </Grid>
  );
}
