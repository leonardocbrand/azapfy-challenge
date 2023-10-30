'use client';

import { useHeroesStore } from '@/store/heroes';
import { Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

function InputBar() {
  const setFilteredHeroes = useHeroesStore((state) => state.actions.setFilteredHeroes);
  const heroes = useHeroesStore((state) => state.state.heroes);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const filteredHeroes = heroes
      .filter((hero) => hero.name.toLowerCase().includes(search.toLowerCase()));

    setFilteredHeroes(filteredHeroes);
  }, [search]);

  return (
    <Box width="15%" p={ 2 }>
      <TextField
        variant="outlined"
        fullWidth
        value={ search }
        InputProps={ {
          startAdornment: (
            <SearchIcon />
          ),
        } }
        onChange={ (e) => setSearch(e.target.value) }
      />
    </Box>
  );
}

export default InputBar;
