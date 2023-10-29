'use client';

import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#5356FB',
    },
    secondary: {
      main: '#00305a',
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAppDirEmotionCacheProvider options={ { key: 'mui' } }>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
