import { Paper, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router';

interface IProps {
  icon: JSX.Element;
  title: string;
  url?: string;
}

export default function PaperCategory(props: IProps) {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} lg={3} display="flex" justifyContent="center" alignItems="center">
      <Paper
        onClick={() => props.url && navigate(props.url)}
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
          transition: '0.3s all',

          '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.05)',
          },
        }}
      >
        {props.icon}
        <Typography fontSize="30px" fontWeight="bold">
          {props.title}
        </Typography>
      </Paper>
    </Grid>
  );
}
