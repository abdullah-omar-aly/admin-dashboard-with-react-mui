import { amber, deepOrange, grey } from "@mui/material/colors";
import React ,  { createContext, useState, useMemo } from "react";
import * as muiStyles from  '@mui/material/styles'

export const getDesignTokens = (mode) => ({
    palette: {
      mode ,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });
  
export const useAppTheme = () => {
    
    const [mode  , setMode ] = React.useState('light')

    const muiTheme = React.useMemo(() => muiStyles.createTheme(getDesignTokens(mode)), [mode]);

    const appTheme = React.useMemo(() => ({
      mode ,
      enableDarkMode: () => setMode('dark') ,
      disableDarkMode: () => setMode('light') ,
      toggleDarkMode: function() {
        mode === 'light' ? this.enableDarkMode() : this.disableDarkMode()
      },
      muiTheme
    }) , [mode])

    return [appTheme]
}

