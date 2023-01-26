import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useState } from "react"

const MuiDialogComponent = () => {
    const [dialogOpen, setDialogOpen] = useState(false)

const handleClose = () => {
setDialogOpen(false)
}

    return(
<>
<Button onClick={() => setDialogOpen(!dialogOpen)}>Open dialog</Button>
<Dialog open={dialogOpen} onClose={() => handleClose()}>
    <DialogTitle>Confirm Submit</DialogTitle>
    <DialogContent>
<DialogContentText>Are you dure you want to submit the test?</DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => {
            alert("Submitted!")
            handleClose()
        }} autoFocus>Submit</Button>
    </DialogActions>
</Dialog>
</>
    )
}

export default MuiDialogComponent