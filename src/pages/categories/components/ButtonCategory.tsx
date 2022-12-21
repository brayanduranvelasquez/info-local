import { Box, Grid, Typography } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { StyledButtonCategory } from '../styled-components/StyledButtonCategory.ts';
import { useNavigate } from 'react-router-dom';

interface IProps {
  title: string;
  url?: string;
}

export default function ButtonCategory(props: IProps) {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} md={6}>
      <StyledButtonCategory elevation={5} onClick={() => props.url && navigate(props.url)}>
        <Box sx={{ width: '10%' }} />

        <Typography variant="h4" fontWeight="bold" sx={{ width: '100%', textAlign: 'center' }}>
          {props.title}
        </Typography>

        <ArrowForwardIosIcon
          sx={{ fontSize: '30px', width: '10%', marginLeft: 2, display: 'flex', justifyContent: 'flex-end' }}
        />
      </StyledButtonCategory>
    </Grid>
  );
}
