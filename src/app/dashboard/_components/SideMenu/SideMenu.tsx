import { useUserStore } from '@/store/user';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Stack, Typography } from '@mui/material';

function SideMenu() {
  const user = useUserStore((state) => state.state.login);
  return (
    <Box component="aside">
      <Stack alignItems="center" spacing={ 1 }>
        <AccountCircleIcon sx={ { fill: '#5456FB' } } fontSize="large" />
        <Typography fontWeight={ 700 } fontStyle="italic">
          {user}
        </Typography>
      </Stack>
    </Box>
  );
}

export default SideMenu;
