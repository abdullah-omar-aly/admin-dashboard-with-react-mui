import React from 'react'
import { useSidebar } from '../sidebar'
import { Box, Button, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export function Topbar() {
    const { toggleCollapse } = useSidebar()
    const theme = useTheme();

    return (
        <Box display="flex" justifyContent="space-between" paddingY={2} position="sticky" top="0" zIndex={100} bgcolor="secondary_bg.main">
            {/* Sidebar button */}
            <Button onClick={toggleCollapse}>
                <MenuOutlinedIcon />
            </Button>

            <Box display="flex" >
                {/* SEARCH BAR */}
                <Box
                    display="flex"
                    backgroundColor="primary_bg.main"
                    borderRadius="3px"
                    marginRight={2}
                >
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                    <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon />
                    </IconButton>
                </Box>


                {/* ICONS */}
                <IconButton onClick={theme.palette.toggleDarkMode}>
                    {theme.palette.mode === "light" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}




