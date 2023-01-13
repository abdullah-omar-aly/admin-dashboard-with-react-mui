import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useMuiTheme } from './theme';
import { Box, CssBaseline } from '@mui/material';
import { Sidebar, SidebarProvider } from './globals/sidebar';
import './App.scss'
import {Topbar} from './globals/topbar';
import { Routes , Route} from 'react-router-dom';
import {Dashboard} from './scenes/dashboard'
import { Team } from './scenes/team';
import { Faq } from './scenes/faq';
import {Calendar} from './scenes/calendar'


export default function App() {
  const muiTheme = useMuiTheme()

  return (
    <ThemeProvider theme={muiTheme}>
      {/* <CssBaseline /> */}
      <SidebarProvider>
        <Box className="app" display="flex" height="100vh" bgcolor="secondary_bg.main">
          <Sidebar />
          <Box component="main" className="content" sx={{width: "100%" , paddingX: '1rem' , height: '100%' , overflowY: 'auto'}}>
            <Topbar />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/team' element={<Team />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/calendar' element={<Calendar />} />
            </Routes>
          </Box>
        </Box>
      </SidebarProvider>

    </ThemeProvider>
  );
}
