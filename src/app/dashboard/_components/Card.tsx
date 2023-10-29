'use client';

import getHeroCardColor from '@/utils/getHeroCardColor';
import { Box, Typography } from '@mui/material';
import { Sword } from '@phosphor-icons/react';

type CardProps = {
  imgSrc: string
  imgAlt: string
  name: string
  powerstats: number
};

function Card({ imgAlt, imgSrc, name, powerstats }: CardProps) {
  const cardColor = getHeroCardColor(powerstats);

  return (
    <Box border={ 1 } p={ 2 } sx={ { bgcolor: cardColor } } borderRadius={ 3 }>
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
