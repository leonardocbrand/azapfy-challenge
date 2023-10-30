'use client';

import { CircularProgress, Stack } from '@mui/material';
import { Heroes } from '@/app/types';
import { useHeroesStore } from '@/store/heroes';
import { useEffect, useState } from 'react';
import Card from './components/Card';

type HeroesContainerProps = {
  data: Heroes[]
};

function HeroesContainer({ data }: HeroesContainerProps) {
  const heroes = useHeroesStore((state) => state.state.heroes);
  const setSelectedHeroes = useHeroesStore((state) => state.actions.setSelectedHeroes);
  const setModal = useHeroesStore((state) => state.actions.setModal);

  const [selected, setSelected] = useState<Heroes[]>([]);

  useEffect(() => {
    if (selected.length === 2) {
      setSelectedHeroes(selected);
      setModal(true);
    }
  }, [selected]);

  const handleClick = (hero: Heroes) => {
    setSelected((prev) => {
      if (prev.includes(hero)) {
        return prev.filter((e) => e.id !== hero.id);
      }
      if (prev.length === 0 || prev.length === 1) {
        return [
          ...prev,
          hero,
        ];
      }
      return [
        prev[0],
        hero,
      ];
    });
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt={ 10 }
      gap={ 4 }
      flexWrap="wrap"
      width="70%"
      overflow="auto"
      sx={ {
        '&::-webkit-scrollbar': {
          width: '0.8rem',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
          backgroundClip: 'content-box',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#5356FB',
          borderRadius: '5px',
          border: '3px solid transparent',
          height: '2rem',
          backgroundClip: 'content-box',
        },
      } }
    >
      {heroes.length === 0
        ? <CircularProgress />
        : (data.map((hero: Heroes) => (
          <Card
            handleClick={ () => handleClick(hero) }
            key={ hero.id }
            imgAlt={ hero.name }
            imgSrc={ hero.images.sm }
            name={ hero.name }
            powerstats={ Object.values(hero.powerstats).reduce((a, b) => a + b) }
            selected={ selected.includes(hero) }
          />
        )))}
    </Stack>
  );
}

export default HeroesContainer;
