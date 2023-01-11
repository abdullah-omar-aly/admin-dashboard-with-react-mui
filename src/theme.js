import React from "react";
import { createTheme } from '@mui/material/styles'
import useLocalStorage from "./hooks/useLocalStorage";

const getPaletteColors = (mode) => {
  return {
    ...(mode === 'dark'
      ? {
        // palette values for dark mode
        primary: { main: '#009688' },
        secondary: { main: '#512DA8' },
        primary_bg: { main:  "#151929" },
        secondary_bg: { main: '#1C2538' },
        primary_text: { main: "fff"},
        secondary_text: { main: "#898FA1"}

      }
      : {
        // palette values for ligth mode
        primary: { main: '##009688' },
        secondary: { main: '#512DA8' },
        primary_bg: { main: '#e0e2e2' },
        secondary_bg: { main: '#eee' },
        primary_text: { main: "#000000"},
        secondary_text: { main: "#99989A"}

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

