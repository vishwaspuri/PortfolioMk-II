import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const navigate = new Map<string, string>([
  ['Home', '/'],
  ['Work Ex', '/experience'],
  ['Achievements', '/achievements'],
  ['Projects', '/projects'],
  ['Resume', '/resume.pdf'],
  // ['Blog', 'https://blog.vishwaspuri.tech']
]);

const NavBar = (props: any) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const navigateTo = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }; 

  const handleCloseNavMenu = (page: string) => {
    setAnchorElNav(null);
    const path = navigate.get(page);
    if (path) {
      if (path.startsWith('http') || path.endsWith('.pdf')) {
        window.open(path, '_blank');
      } else {
        navigateTo(path);
      }
    }
  };

  return (
    <AppBar position="static" style={{ background: 'white', boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Logo} width="70" height="70" alt="Vishwas Puri Logo"/>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent="flex-end">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {Array.from( navigate.keys()).map((page) => (
                <MenuItem key={page} onClick={()=>{handleCloseNavMenu(page);}}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="flex-end">
            {Array.from( navigate.keys()).map(page => (
              <Button
                key={page}
                onClick={()=>{handleCloseNavMenu(page);}}
                sx={{ my: 1, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;