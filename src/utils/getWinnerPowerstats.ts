import { Heroes } from '@/app/types';

export const getWinnersPowerstats = (data: Heroes[]) => {
  if (data.length === 2) {
    const hero1 = data[0];
    const hero2 = data[1];

    const winnerStats = {
      intelligence: Math
        .max(hero1.powerstats.intelligence, hero2.powerstats.intelligence),
      strength: Math.max(hero1.powerstats.strength, hero2.powerstats.strength),
      speed: Math.max(hero1.powerstats.speed, hero2.powerstats.speed),
      durability: Math.max(hero1.powerstats.durability, hero2.powerstats.durability),
      power: Math.max(hero1.powerstats.power, hero2.powerstats.power),
      combat: Math.max(hero1.powerstats.combat, hero2.powerstats.combat),
    };

    return Object.values(winnerStats);
  }

  return [];
};
