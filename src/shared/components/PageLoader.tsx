import { CircularProgress, Stack } from '@mui/material';
import { useRef, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

// Local
import { theme } from '../styled-components/theme';

export default function PageLoader() {
  const ref = useRef<any>(null);
  useEffect(() => ref.current.continuousStart());

  return (
    <>
      <LoadingBar color={theme.palette.primary.main} ref={ref} height={3.5} />

      <Stack justifyContent="center" alignItems="center" minHeight="100vh" margin={1}>
        <CircularProgress size={60} />
      </Stack>
    </>
  );
}
