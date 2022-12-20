import { Grid, Box, Typography, Button, Card, CardActions, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface IProps {
  img: string;
  title: string;
  url: string;
}

export const BoxLocals = (props: IProps) => {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center" alignItems="center">
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
          borderRadius: 1,
          margin: 2,
          paddingBottom: 2,
        }}
      >
        <Box component="img" src={props.img} sx={{ width: '100%', height: '150%' }} />
        <CardContent>
          <Typography variant="h4" fontWeight="bold">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={() => navigate(`${props.url}`)}>
            Ir
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
