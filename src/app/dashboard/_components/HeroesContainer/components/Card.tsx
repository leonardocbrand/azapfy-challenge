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
  const [bgColor, borderColor] = getHeroCardColor(powerstats);

  return (
    <Stack
      sx={ {
        background: bgColor,
        cursor: 'pointer',
        borderColor: `${selected ? 'rgb(252,252,252)' : borderColor}`,
        '&:hover': {
          width: 220,
          transition: 'all 0.35s ease-in-out',
        },
      } }
      borderRadius={ 3 }
      border={ selected ? 3 : 2 }
      onClick={ handleClick }
      alignItems="center"
      width={ selected ? 220 : 200 }
      spacing={ 1 }
      pb={ 1 }
    >
      <Box
        component="img"
        src={ imgSrc }
        alt={ imgAlt }
        sx={ {
          borderRadius: '0 0 10px 10px',
          boxShadow: `0px 5px 20px 5px ${borderColor}` } }
      />
      <Typography
        color="#A3A994"
        fontStyle="italic"
        fontWeight="700"
        fontSize={ 15 }
      >
        { name.toUpperCase() }
      </Typography>
      <Box display="flex" alignContent="center" justifyContent="center" gap={ 1 }>
        <Sword size={ 24 } color="#949494" weight="bold" />
        <Typography
          color="#A3A994"
          fontStyle="italic"
          fontWeight="700"
          fontSize={ 15 }
        >
          {powerstats}
        </Typography>
      </Box>
    </Stack>
  );
}

export default Card;
