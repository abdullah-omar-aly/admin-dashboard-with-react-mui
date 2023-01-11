import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useMuiTheme } from './theme';
import { Box, CssBaseline } from '@mui/material';
import { Sidebar, SidebarProvider } from './globals/sidebar';
import './App.scss'
import {Topbar} from './globals/topbar';


export default function App() {
  const muiTheme = useMuiTheme()

  return (
    <ThemeProvider theme={muiTheme}>
      {/* <CssBaseline /> */}
      <SidebarProvider>
        <Box className="app" display="flex" height="100vh" bgcolor="secondary_bg.main">
          <Sidebar />
          <Box component="main" className="content" sx={{width: "100%" , paddingX: '1rem'}}>
            <Topbar />
            content
          </Box>
        </Box>
      </SidebarProvider>

    </ThemeProvider>
  );
}
