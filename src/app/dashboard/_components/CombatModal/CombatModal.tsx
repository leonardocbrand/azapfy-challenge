import { useHeroesStore } from '@/store/heroes';
import { Modal, Box, Typography, Stack } from '@mui/material';
import { getWinnerHero } from '@/utils/getWinnerHero';
import { getWinnersPowerstats } from '@/utils/getWinnerPowerstats';
import SelectedHeroCard from './components/SelectedHeroCard';

function CombatModal() {
  const selectedHeroes = useHeroesStore((state) => state.state.selectedHeroes);
  const setModal = useHeroesStore((state) => state.actions.setModal);
  const modal = useHeroesStore((state) => state.state.modal);
  const powerstats = selectedHeroes.length
    ? Object.keys(selectedHeroes[0].powerstats) : null;

  const winnerHero = getWinnerHero(selectedHeroes);
  const winnersPowerstats = getWinnersPowerstats(selectedHeroes);

  return (
    <Modal
      open={ modal }
      onClose={ () => setModal(false) }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        display="flex"
        flexDirection="column"
        position="absolute"
        justifyContent="center"
        textAlign="center"
        borderRadius={ 2 }
        p={ { xs: 2, md: 10 } }
        gap={ { xs: 3, md: 0 } }
        alignItems="center"
        sx={ { top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          border: '2px solid #000' } }
      >
        <Typography variant="h6">
          <Typography
            component="span"
            color="green"
            variant="h5"
            fontWeight={ 700 }
          >
            Winner
          </Typography>
          {' '}
          {winnerHero?.name}
        </Typography>
        <Stack direction="row" spacing={ { xs: 20, md: 30 } }>
          {selectedHeroes.map((hero, index) => (
            <SelectedHeroCard
              key={ hero.id }
              hero={ hero }
              index={ index }
              winnersPowerstats={ winnersPowerstats }
            />
          ))}
        </Stack>
        <Box position="absolute" mb={ { xs: 0, md: 3, lg: 0 } }>
          {powerstats?.map((state) => (
            <Typography
              textTransform="capitalize"
              fontWeight={ 700 }
              key={ state }
              fontSize={ { xs: 15, md: 16 } }
            >
              {state}
            </Typography>
          ))}
        </Box>
      </Box>
    </Modal>
  );
}

export default CombatModal;
