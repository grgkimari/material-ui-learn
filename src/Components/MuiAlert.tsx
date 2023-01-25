import { Check } from "@mui/icons-material"
import { Alert, AlertTitle, Stack } from "@mui/material"

const MuiAlert = () => {
    return(
        <Stack spacing={2}>
            <Alert  severity="error"><AlertTitle>Error encountered</AlertTitle>Error Alert</Alert>
            <Alert severity="warning">Warning Alert</Alert>
            <Alert severity="info">Info Alert</Alert>
            <Alert severity="success" icon={<Check fontSize="inherit"/>}>Success Alert</Alert>
            
            <Alert variant="outlined"  severity="error">Error Alert</Alert>
            <Alert variant="outlined" severity="warning">Warning Alert</Alert>
            <Alert variant="outlined" severity="info">Info Alert</Alert>
            <Alert variant="outlined" severity="success">Success Alert</Alert>

            <Alert variant="filled"  severity="error">Error Alert</Alert>
            <Alert variant="filled" severity="warning">Warning Alert</Alert>
            <Alert variant="filled" severity="info">Info Alert</Alert>
            <Alert variant="filled" severity="success">Success Alert</Alert>
        </Stack>
    )
}

export default MuiAlert