import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';


const MuiSpeedDial = () => {
    return(
        <SpeedDial ariaLabel="Navigation speed dial" icon={<SpeedDialIcon />} sx={{
            position : "absolute",
            bottom : 0,
            right : 0
        }}>
            <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle="Copy" tooltipOpen/>
            <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" tooltipOpen/>
            <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" tooltipOpen/>
            
        </SpeedDial>
    )
}

export default MuiSpeedDial