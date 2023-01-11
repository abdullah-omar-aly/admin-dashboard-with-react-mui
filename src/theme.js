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
        secondary_bg: { main:  "#151929" },
        primary_bg: { main: '#1C2538' },
        secondary_text : { main: "#ffffff"},
        primary_text: { main: "#898FA1"} , 
        primary_fg: {main: '#e81b4b'}

      }
      : {
        // palette values for ligth mode
        primary: { main: '#009688' },
        secondary: { main: '#512DA8' },
        secondary_bg: { main: '#fff' },
        primary_bg: { main: '#eee' },
        secondary_text : { main: "black"},
        primary_text: { main: "black"}

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

