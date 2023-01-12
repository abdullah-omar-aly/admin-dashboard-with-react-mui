import { Avatar, Box, Menu, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSidebar } from './index'
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from 'react-router-dom'

const Item = ({ title, to, icon, selected, setSelected }) => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  return (
    // <MenuItem
    //   active={selected === title}
    //   style={{
    //     // color: colors.grey[100],
    //   }}
    //   onClick={() => setSelected(title)}
    //   icon={icon}
    // >
    <>
      <Typography>{title}</Typography>
      <Link to={to} />
    </>
    // </MenuItem>
  );
};

export function Sidebar() {
  const { isCollapsed } = useSidebar()
  const [selected, setSelected] = useState("Dashboard");


  return (
    <Box
      component="aside"
      display='flex'
      sx={{
        transitionProperty: 'width',
        transitionDuration: '300ms',
        width: isCollapsed ? 0 : '300px',
        overflow: 'hidden'

      }}
    >
      <Box sx={{ minWidth: "250px", bgcolor: 'primary_bg.main' }}>
        <Typography
          variant='h5'
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            textAlign: 'center',
            paddingY: '1rem'
          }}>WebShop</Typography>

        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", paddingY: '0.5rem' }}>
          <Avatar src='/vite.svg' />
          <Typography variant='h6' color="primary_text.main">Evan U</Typography>
          <Typography sx={{ color: "primary.main", fontSize: '0.7rem' }} >VP Fancy Admin</Typography>
        </Box>
        
        
        <Box sx={{display: "flex" , flexDirection: 'column' , alignItems: "center"}} >
          <Box sx={{display: 'flex' , paddingY: '0.5rem' }}>
            <HomeOutlinedIcon />
            <Typography color="green">Dashboard</Typography>
          </Box>
          <Box sx={{display: 'flex' , paddingY: '0.5rem' }}>
            <HomeOutlinedIcon />
            <Typography color="green">Dashboard</Typography>
          </Box>
          <Box sx={{display: 'flex' , paddingY: '0.5rem' }}>
            <HomeOutlinedIcon />
            <Typography color="green">Dashboard</Typography>
          </Box>
        </Box>
      </Box>


    </Box>


  )
}