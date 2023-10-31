'use client';

import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useHeroesStore } from '@/store/heroes';
import getHeroes from '@/services/getHeroes';
import { HeroesContainer } from './_components/HeroesContainer';
import { InputBar } from './_components/InputBar';
import { CombatModal } from './_components/CombatModal';
import { SideMenu } from './_components/SideMenu';

export default function Dashboard() {
  const setHeroes = useHeroesStore((state) => state.actions.setHeroes);
  const filteredHeroes = useHeroesStore((state) => state.state.filteredHeroes);

  useEffect(() => {
    const getData = async () => {
      const data = await getHeroes();
      setHeroes(data);
    };

    getData();
  }, []);

  return (
    <Box
      component="main"
      sx={ {
        bgcolor: '#19191E',
        height: '100vh',
        minWidth: '100vw',
        display: 'flex' } }
    >
      <SideMenu />
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="center"
      >
        <InputBar />
        <HeroesContainer data={ filteredHeroes } />
      </Box>
      <CombatModal />
    </Box>
  );
}
