'use client';

import { useUserStore } from '@/store/user';
import ForwardIcon from '@mui/icons-material/Forward';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Button, Drawer, IconButton, Stack, Typography } from '@mui/material';
import { Planet } from '@phosphor-icons/react';
import { useState } from 'react';

type DrawerMenuProps = {
  handleClick: () => void
};

function DrawerMenu({ handleClick }: DrawerMenuProps) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const user = useUserStore((state) => state.state.login);

  return (
    <>
      <Drawer
        open={ openDrawer }
        onClose={ () => setOpenDrawer(false) }
        component="aside"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={ 20 }
          p={ 1 }
          bgcolor="#111114"
          height="100%"
        >
          <Stack alignItems="center" spacing={ 1 }>
            <AccountCircleIcon sx={ { fill: '#5456FB' } } fontSize="large" />
            <Typography fontWeight={ 700 } fontStyle="italic">
              {user}
            </Typography>
          </Stack>
          <Button
            variant="contained"
            onClick={ handleClick }
            size="large"
            fullWidth
            startIcon={ <Planet size={ 28 } color="#FFF" weight="bold" /> }
            sx={ { borderRadius: 3, fontWeight: 700, textTransform: 'capitalize' } }
          >
            Cartas
          </Button>
        </Box>
      </Drawer>
      <IconButton onClick={ () => setOpenDrawer(!openDrawer) }>
        <ForwardIcon />
      </IconButton>
    </>
  );
}

export default DrawerMenu;
