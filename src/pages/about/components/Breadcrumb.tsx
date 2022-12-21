import { Stack, Typography } from '@mui/material';

export default function Breadcrumb() {
  return (
    <Stack direction="row" my={3} columnGap={1} flexWrap="wrap">
      <Typography variant="h5" fontWeight="bold">
        Actualmente te encuentras en: Acerca de nosotros
      </Typography>
    </Stack>
  );
}
