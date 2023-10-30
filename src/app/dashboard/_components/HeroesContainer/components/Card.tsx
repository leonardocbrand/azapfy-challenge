'use client';

import getHeroCardColor from '@/utils/getHeroCardColor';
import { Box, Stack, Typography } from '@mui/material';
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
    <Stack
      border={ selected ? 5 : 1 }
      sx={ { background: cardColor, cursor: 'pointer' } }
      borderRadius={ 3 }
      onClick={ handleClick }
      alignItems="center"
      width={ 200 }
      pb={ 1 }
    >
      <Box
        component="img"
        src={ imgSrc }
        alt={ imgAlt }
        sx={ { borderRadius: '0 0 10px 10px' } }
      />
      <Typography
        color="#A3A994"
        fontStyle="italic"
        fontWeight="700"
      >
        { name }
      </Typography>
      <Box display="flex" alignContent="center" justifyContent="center" gap={ 1 }>
        <Sword size={ 26 } color="#949494" weight="bold" />
        <Typography
          color="#A3A994"
          fontStyle="italic"
          fontWeight="700"
        >
          {powerstats}
        </Typography>
      </Box>
    </Stack>
  );
}

export default Card;
