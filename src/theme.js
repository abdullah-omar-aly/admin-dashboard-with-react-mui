import React from "react";
import { createTheme } from '@mui/material/styles'
import useLocalStorage from "./hooks/useLocalStorage";

const getPaletteColors = (mode) => {
  return {
    ...(mode === 'dark'
      ? {
        // palette values for dark mode
        primary: { main: '#4CC6AD' },
        secondary: { main: '#3e4396' },
        primary_bg: { main:  "#fff" },
        secondary_bg: { main: '#151929' },

      }
      : {
        // palette values for ligth mode
        primary: { main: '#4CC6AD' },
        secondary: { main: '#3e4396' },
        primary_bg: { main: '#FF2A9C' },
        secondary_bg: { main: '#eee' },
      }),
  }
}

export const useMuiTheme = () => {

  const [mode, setMode] = useLocalStorage('mode' , "light" )

  const toggleDarkMode = () => { mode === 'light' ? setMode('dark') : setMode('light') }

  const theme = React.useMemo(() => createTheme({
    palette: {
      mode ,
      toggleDarkMode , 
      ...getPaletteColors(mode)
    }
  }), [mode]);
  
  return theme


}

