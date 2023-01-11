import { ThemeProvider  } from '@mui/material/styles';
import React from 'react';
import { useMuiTheme  } from './theme';
import { CssBaseline } from '@mui/material';


export default function App() {
  const  muiTheme  = useMuiTheme()

  return (
      <ThemeProvider theme={muiTheme}>
        {/* <CssBaseline /> */}

      </ThemeProvider>
  );
}
