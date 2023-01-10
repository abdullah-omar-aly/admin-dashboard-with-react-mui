import { ThemeProvider  } from '@mui/material/styles';
import React from 'react';
import { useAppTheme  } from './theme';
import { Button } from '@mui/material';


export default function App() {
  const [ appTheme ] = useAppTheme()

  return (
      <ThemeProvider theme={appTheme.muiTheme}>
        <Button onClick={() => appTheme.toggleDarkMode()}>toggle mode</Button>
      </ThemeProvider>
  );
}
