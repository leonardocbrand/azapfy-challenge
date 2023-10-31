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
    <Box>
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
                  sx={ { width: { xs: 16, md: '20px' }, height: { xs: 16, md: '20px' } } }
                />
                <Typography width={ { xs: 20, md: 30 } } fontSize={ { xs: 15, md: 16 } }>
                  {state as number}
                </Typography>
              </Box>
            ))}
          </Stack>
        )}
        <Box
          component="img"
          src={ hero.images.sm }
          alt={ hero.name }
          width={ { sx: 150, md: 190 } }
          height={ 210 }
        />
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
                <Typography width={ { xs: 20, md: 30 } } fontSize={ { xs: 15, md: 16 } }>
                  {state as number}
                </Typography>
                <CircleIcon
                  color={ winnersPowerstats[i] === state
                    ? 'success' : 'error' }
                  sx={ { width: { xs: 16, md: '20px' }, height: { xs: 16, md: '20px' } } }
                />
              </Box>
            ))}
          </Stack>
        )}
      </Box>
      <Typography
        textAlign={ index === 0 ? 'start' : 'end' }
        mt={ { xs: 1, md: 2 } }
        fontSize={ { xs: 14, md: 16 } }
      >
        {hero.name}
      </Typography>
    </Box>
  );
}

export default SelectedHeroCard;
