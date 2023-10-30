'use client';

import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useHeroesStore } from '@/store/heroes';
import getHeroes from '@/services/getHeroes';
import { HeroesContainer } from './_components/HeroesContainer';
import { InputBar } from './_components/InputBar';
import { CombatModal } from './_components/CombatModal';

export default function Dashboard() {
  const setHeroes = useHeroesStore((state) => state.actions.setHeroes);
  const heroes = useHeroesStore((state) => state.state.filteredHeroes);

  useEffect(() => {
    const getData = async () => {
      const data = await getHeroes();
      setHeroes(data);
    };

    getData();
  }, []);

  return (
    <Container
      component="main"
      sx={ {
        bgcolor: '#19191E',
        height: '100vh',
        minWidth: '100vw',
        display: 'flex',
        justifyContent: 'center' } }
    >
      <HeroesContainer data={ heroes } />
      <CombatModal />
      <InputBar />
    </Container>
  );
}
