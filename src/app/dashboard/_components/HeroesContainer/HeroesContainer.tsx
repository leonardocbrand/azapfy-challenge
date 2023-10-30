'use client';

import { CircularProgress, Stack } from '@mui/material';
import { Heroes } from '@/app/types';
import { useHeroesStore } from '@/store/heroes';
import Card from './components/Card';

type HeroesContainerProps = {
  data: Heroes[]
};

function HeroesContainer({ data }: HeroesContainerProps) {
  const heroes = useHeroesStore((state) => state.state.heroes);

  return (
    <Stack
      direction="row"
      spacing={ 20 }
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      width="70%"
      p={ 5 }
    >
      {heroes.length === 0
        ? <CircularProgress />
        : (data.map((hero: Heroes) => (
          <Card
            key={ hero.id }
            imgAlt={ hero.name }
            imgSrc={ hero.images.sm }
            name={ hero.name }
            powerstats={ Object.values(hero.powerstats).reduce((a, b) => a + b) }
          />
        )))}
    </Stack>
  );
}

export default HeroesContainer;
