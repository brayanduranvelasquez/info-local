import { Grid, Box, Typography, CardContent, Stack, Skeleton } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Local
import { StyledCardLocal } from '../styled-components/StyledCardLocal';

interface IProps {
  img: string;
  title: string;
  url?: string;
}

export default function CardLocal(props: IProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center" alignItems="center" padding={2.5}>
      <StyledCardLocal elevation={10} onClick={() => props.url && navigate(props.url)}>
        {isLoading && <Skeleton variant="rectangular" width="100%" height={200} />}
        {!isLoading && <Box width="100%" height={200} sx={{ background: `url(${props.img})` }} />}

        <CardContent>
          <Stack mb={1.5}>
            <Typography variant="h6" fontWeight="bold">
              {props.title}
            </Typography>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate impedit dolore ipsum culpa, laborum, nemo
            eveniet temporibus.
          </Typography>
        </CardContent>
      </StyledCardLocal>

      <Box component="img" src={props.img} display={'none'} onLoad={() => setIsLoading(false)} />
    </Grid>
  );
}
