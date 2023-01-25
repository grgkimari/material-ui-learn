import { Delete } from "@mui/icons-material"
import { IconButton, Tooltip } from "@mui/material"

const MuiToolTip = () => {
    return(
        <Tooltip title="Delete" placement="left" arrow enterDelay={1500} leaveDelay={2000}>
            <IconButton>
                <Delete />
            </IconButton>
        </Tooltip>
    )
}

export default MuiToolTip