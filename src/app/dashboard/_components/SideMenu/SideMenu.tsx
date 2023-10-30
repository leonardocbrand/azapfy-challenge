import { useUserStore } from '@/store/user';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Planet } from '@phosphor-icons/react';
import DrawerMenu from './components/DrawerMenu';

function SideMenu() {
  const user = useUserStore((state) => state.state.login);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (isMatch ? (<DrawerMenu />) : (
    <Box
      width={ 200 }
      component="aside"
      sx={ { bgcolor: '#111114',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        p: 1 } }
    >
      <Stack alignItems="center" spacing={ 1 } mt={ 2 }>
        <AccountCircleIcon sx={ { fill: '#5456FB', fontSize: 50 } } />
        <Typography fontWeight={ 700 } fontStyle="italic">
          {user}
        </Typography>
      </Stack>
      <Button
        variant="contained"
        size="large"
        fullWidth
        startIcon={ <Planet size={ 28 } color="#FFF" weight="bold" /> }
        sx={ { borderRadius: 3, fontWeight: 700, textTransform: 'capitalize' } }
      >
        Cartas
      </Button>
    </Box>)
  );
}

export default SideMenu;
