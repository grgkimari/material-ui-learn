import { Avatar, Chip, Stack } from "@mui/material"

const MuiChip = () => {
    return(
        <Stack direction={"row"} spacing={1}>
            <Chip label="Chip 1" color="primary"/>
            <Chip label="Chip 2" color="primary" size="small"/>
            <Chip variant="outlined" label="Chip 3" color="primary" size="small"/>
            <Chip variant="outlined" avatar={<Avatar />} label="Chip 4" color="secondary" size="small"/>
        </Stack>
    )
}

export default MuiChip