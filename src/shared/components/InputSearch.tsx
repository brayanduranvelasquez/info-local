import { Box, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function InputSearch() {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, width: '80%' }}>
        <TextField
          placeholder="Buscar un local, negocio, empresa, categoría, subcategoría..."
          sx={{ background: '#fff', borderRadius: '5px', maxWidth: '480px' }}
          fullWidth
        />
        <Button variant="contained" color="primary" sx={{ paddingY: 1.3 }}>
          <SearchIcon fontSize="large" />
        </Button>
      </Box>
    </>
  );
}
