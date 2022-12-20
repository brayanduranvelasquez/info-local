import { Box, Grid, Typography } from '@mui/material';

interface IProps {
  icon: JSX.Element;
  message: string;
}

export default function InformationSection(props: IProps) {
  return (
    <Grid item xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
      <Box
        sx={{
          padding: 2,
          minWidth: '300px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box marginBottom={2}>{props.icon}</Box>
        <Typography>{props.message}</Typography>
      </Box>
    </Grid>
  );
}
