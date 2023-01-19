import { CatchingPokemon, KeyboardArrowDown } from "@mui/icons-material"
import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material"
import React, { useState } from "react"

const MuiNavbar = () => {
    //store anchor element(button in state)
    const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null)
    const open = Boolean(anchorElement)
function handleClick (event : React.MouseEvent<HTMLButtonElement>) {
    setAnchorElement(event.currentTarget)
}

function handleClose() {
    setAnchorElement(null)
}

    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" sx={{
                    flexGrow : 1
                }}>
                    <CatchingPokemon />
                </IconButton>
                <Typography variant="h6">Pokemon App</Typography>
                <Stack direction="row" spacing={1}>
                    <Button href="" color="inherit">Features</Button>
                    <Button href="" color="inherit">Pricing</Button>
                    <Button id="resources-button" onClick={handleClick} color="inherit" aria-controls={open ? "resources-menu" : undefined} endIcon={<KeyboardArrowDown />}>Resources</Button>
                </Stack>
                <Menu id="resources-menu" anchorEl={anchorElement} open={open}
                MenuListProps={{
                    "aria-labelledby" : "resources-menu"
                }}
                onClose={handleClose}
                >
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>Forum</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavbar