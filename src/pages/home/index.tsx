import { Stack, Typography } from '@mui/material';

export default function Page() {
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ background: '#ccc', minHeight: '100vh' }}>
      <Typography variant="h2">Hola mundo!</Typography>
    </Stack>
  );
}
