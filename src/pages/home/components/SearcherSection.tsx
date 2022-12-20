import { Stack, Typography } from '@mui/material';

// Local
import InputSearch from '../../../shared/components/InputSearch';
import { StyledStackImg } from '../styled-components/StyledStackImg';

export default function SearcherSection() {
  return (
    <StyledStackImg>
      <Stack justifyContent="center" alignItems="center" sx={{ minHeight: '100%', color: '#fff' }}>
        <Typography variant="h2" fontWeight={800} sx={{ paddingBottom: 2 }}>
          InfoLocal
        </Typography>
        <InputSearch />
      </Stack>
    </StyledStackImg>
  );
}
