import { Avatar, Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useSidebar } from './index'
import { NavLink } from 'react-router-dom'
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

const SidebarItem = ({ title, to, icon }) => {
  const { palette } = useTheme();

  return (

    <NavLink style={({ isActive }) => {
      return {
        display: "flex",
        alignItems: "center",
        padding: "0.8rem",
        textDecoration: "none",
        borderLeft: "2px solid",
        borderColor: isActive ? palette.primary.main : "transparent",
        background: isActive ? palette.secondary_bg.main : "transparent",

        color: palette.primary_text.main
      }
    }} to={to}>

      <Box component="span" sx={{ pr: "0.5rem" }}>{icon}</Box>
      <Typography fontSize="0.9rem">{title}</Typography>
    </NavLink>
  );
};

export function Sidebar() {
  const { isCollapsed } = useSidebar()

  return (
    <Box
      component="aside"
      sx={{
        transitionProperty: 'width',
        transitionDuration: '300ms',
        width: isCollapsed ? 0 : '300px',
        bgcolor: "red",
        overflow: 'hidden'
      }}
    >
      <Box sx={{  bgcolor: 'primary_bg.main' , width: "300px" , height: '100%' , overflowY: 'auto' }}>
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


        <Box sx={{ display: "flex", flexDirection: 'column' }} >
          <SidebarItem title="Dashboard" to="/" icon={<HomeOutlinedIcon />} />
          <SidebarItem title="Team" to="/team" icon={<PeopleOutlinedIcon />} />
          <SidebarItem title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} />
          <SidebarItem title="FAQ" to="/faq" icon={<HelpOutlineOutlinedIcon />} />
        </Box>
      </Box>


    </Box>


  )
}