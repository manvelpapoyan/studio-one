import { AppBar, Box, Toolbar, Typography, Button, CssBaseline } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Login', path: '/login' },
  { label: 'News', path: '/news' },
  { label: 'Profile', path: '/profile' },
];

export default function Header() {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: '#0c1421' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'start', display: { xs: 'none', sm: 'block' } }}
          >
            STUDIO ONE
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: '#f7f7f7',
                  borderBottom: location.pathname === item.path ? '2px solid #f7f7f7' : 'none',
                  borderRadius: 0,
                  '&:hover': {
                   backgroundColor: '#3b63a8',
                  color: '#f7f7f7',
                borderRadius:1}
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
