import { Grid } from '@mui/material';

// Local
import { StyledLink } from '../styled-components/StyledLink';

interface IProps {
  icon: JSX.Element;
  message: string;
}

export default function SocialMedia(props: IProps) {
  return (
    <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center" alignContent="center" padding={5}>
      {props.icon}

      <StyledLink variant="h5" fontWeight="bold" marginLeft={1}>
        {props.message}
      </StyledLink>
    </Grid>
  );
}
