import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { useSidebar } from './index'

export function Sidebar() {
  const { isCollapsed } = useSidebar()


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

      </Box>


    </Box>


  )
}