import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, Typography } from "@mui/material"
import { useState } from "react"

const MuiDrawer = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    return(
        <>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={() => setDrawerOpen(!drawerOpen)}>
            <MenuIcon  />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose = {() => setDrawerOpen(!drawerOpen)}>
            <Box width={"250px"} textAlign="center" role="presentation">
                <Typography variant="h6" component="div">Side bar</Typography>
            </Box>
        </Drawer>
        </>
        
    )
}

export default MuiDrawer