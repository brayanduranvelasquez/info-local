import * as React from 'react';
import { Button, Container, Stack } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

// Local
import {
  StyledSearch,
  StyledSearchIconWrapper,
  StyledInputBase,
} from '../../pages/home/styled-components/InputSearchHeader';
import { useNavigate } from 'react-router-dom';
import { StyledLinkNav, StyledStackLinks } from '../styled-components/StyledHeader';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem sx={{ justifyContent: 'center' }} onClick={() => navigate('/categories')}>
        <Typography>Categorías</Typography>
      </MenuItem>
      <MenuItem sx={{ justifyContent: 'center' }} onClick={() => navigate('/about')}>
        <Typography>Acerca de</Typography>
      </MenuItem>
      <MenuItem sx={{ justifyContent: 'center' }}>
        <Button variant="contained" onClick={() => navigate('/register')}>
          Registrar
        </Button>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem sx={{ justifyContent: 'center' }} onClick={() => navigate('/categories')}>
        <Typography>Categorías</Typography>
      </MenuItem>
      <MenuItem sx={{ justifyContent: 'center' }} onClick={() => navigate('/about')}>
        <Typography>Acerca de</Typography>
      </MenuItem>
      <MenuItem sx={{ justifyContent: 'center' }}>
        <Button variant="contained" onClick={() => navigate('/register')}>
          Registrar
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: '#FFFFFF', color: '#000' }}>
        <Container>
          <Toolbar sx={{ display: 'flex' }}>
            <Stack>
              <Typography
                variant="h5"
                fontWeight="bold"
                component="div"
                sx={{ '&:hover': { cursor: 'pointer' } }}
                onClick={() => navigate('/')}
              >
                InfoLocal
              </Typography>
            </Stack>

            <Stack flex={2} marginX={2}>
              <StyledSearch
                sx={{
                  background: '#c9c9c9',
                  width: '100%',
                  '&:hover': {
                    background: '#c9c9c9',
                  },
                }}
              >
                <StyledSearchIconWrapper>
                  <SearchIcon />
                </StyledSearchIconWrapper>
                <StyledInputBase
                  placeholder="Buscar un local, negocio, empresa, categoría, subcategoría..."
                  inputProps={{ 'aria-label': 'buscar' }}
                />
              </StyledSearch>
            </Stack>

            <Stack>
              <StyledStackLinks sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                <StyledLinkNav onClick={() => navigate('/categories')}>Categorías</StyledLinkNav>
                <StyledLinkNav onClick={() => navigate('/about')}>Acerca de</StyledLinkNav>
                <Button variant="contained" color="primary">
                  Registrar
                </Button>
              </StyledStackLinks>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
