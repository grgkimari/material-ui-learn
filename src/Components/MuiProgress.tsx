import { CircularProgress, LinearProgress } from "@mui/material"
import { Stack } from "@mui/system"

const MuiProgress = () => {
    return(
        <Stack spacing={2}>
            <CircularProgress color="success" variant="determinate" value={60} />
            <LinearProgress color="primary" variant="determinate" value={10} />
        </Stack>
    )
}

export default MuiProgress