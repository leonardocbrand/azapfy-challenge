'use client';

import getHeroCardColor from '@/utils/getHeroCardColor';
import { Box, Typography } from '@mui/material';
import { Sword } from '@phosphor-icons/react';

type CardProps = {
  imgSrc: string
  imgAlt: string
  name: string
  powerstats: number
  handleClick: () => void
  selected: boolean
};

function Card({ imgAlt, imgSrc, name, powerstats, handleClick, selected }: CardProps) {
  const cardColor = getHeroCardColor(powerstats);

  return (
    <Box
      border={ selected ? 5 : 1 }
      p={ 2 }
      sx={ { bgcolor: cardColor } }
      borderRadius={ 3 }
      component="button"
      onClick={ handleClick }
    >
      <Box component="img" src={ imgSrc } alt={ imgAlt } />
      <Typography color="#A3A994">{ name }</Typography>
      <Box display="flex" alignContent="center" justifyContent="center">
        <Sword size={ 26 } color="#949494" weight="bold" />
        <Typography color="#A3A994">{powerstats}</Typography>
      </Box>
    </Box>
  );
}

export default Card;
