import { Box, Stack, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { Heroes } from '@/app/types';

type SelectedHeroCardProps = {
  hero: Heroes
  index: number
  winnersPowerstats: number[]
};

function SelectedHeroCard({ hero, index, winnersPowerstats }: SelectedHeroCardProps) {
  return (
    <Box key={ hero.id }>
      <Box display="flex" justifyContent="center" alignItems="center" gap={ 2 }>
        {index === 1 && (
          <Stack>
            { Object.values(hero.powerstats).map((state, i) => (
              <Box
                key={ hero.name + hero.id }
                display="flex"
                gap={ 2 }
                alignItems="center"
                justifyContent="center"
              >
                <CircleIcon
                  color={ winnersPowerstats[i] === state
                    ? 'success' : 'error' }
                  fontSize="small"
                />
                <Typography width={ 30 }>
                  {state as number}
                </Typography>
              </Box>
            ))}
          </Stack>
        )}
        <Box component="img" src={ hero.images.sm } alt={ hero.name } />
        {index !== 1 && (
          <Stack>
            {Object.values(hero.powerstats).map((state, i) => (
              <Box
                key={ hero.name + hero.id }
                display="flex"
                gap={ 2 }
                alignItems="center"
                justifyContent="center"
              >
                <Typography width={ 30 }>
                  {state as number}
                </Typography>
                <CircleIcon
                  color={ winnersPowerstats[i] === state
                    ? 'success' : 'error' }
                  fontSize="small"
                />
              </Box>
            ))}
          </Stack>
        )}
      </Box>
      <Typography textAlign={ index === 0 ? 'start' : 'end' } mt={ 2 }>
        {hero.name}
      </Typography>
    </Box>
  );
}

export default SelectedHeroCard;
