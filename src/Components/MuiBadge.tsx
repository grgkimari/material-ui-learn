import { Mail } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { Stack } from "@mui/system"

const MuiBadge = () => {
    return(
        <Stack spacing={2} direction="row">
            <Badge badgeContent={100} color="error">
                <Mail />
            </Badge>
            <Badge variant="dot" color="success">
                <Mail />
            </Badge>
        </Stack>
    )
}

export default MuiBadge