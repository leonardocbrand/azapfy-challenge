import { Heroes } from '@/app/types';

export const getWinnerHero = (selectedHeroes: Heroes[]) => {
  if (selectedHeroes.length === 2) {
    const hero1 = selectedHeroes[0];
    const hero2 = selectedHeroes[1];

    const hero1Power = Object.values(hero1.powerstats).reduce((a, b) => a + b);
    const hero2Power = Object.values(hero2.powerstats).reduce((a, b) => a + b);

    if (hero1Power > hero2Power) {
      return hero1;
    }
    return hero2;
  }
};
