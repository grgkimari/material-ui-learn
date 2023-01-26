import { Alert, Button, Snackbar, SnackbarContent } from "@mui/material"
import React, { useState } from "react"

const MuiSnackBar = () => {
    const[open, setOpen] = useState(false)
    return(
        <>
    <Button variant="outlined" onClick={() => setOpen(!open)}>Submit</Button>
    <Snackbar  open={open} autoHideDuration={4000} onClose={
        (event? : Event | React.SyntheticEvent<any, Event>, reason? : string) => {
            if(reason !== "clickaway"){
                setOpen(!open)
            }
        }
    } anchorOrigin={{
        vertical : "bottom",
        horizontal : "center"
    }} ><Alert severity="success" sx={{
        width : "100%"
    }}>Form submitted successfully</Alert></Snackbar>
    </>
    )
}

export default MuiSnackBar