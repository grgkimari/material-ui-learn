import { Box, FormControlLabel, Switch } from "@mui/material"
import { useState } from "react"


const MuiSwitch = () => {
    const[darkModeOn, setDarkModeOn] = useState(false)
    return(
        <Box>
            <FormControlLabel label="Dark mode" control={<Switch checked={darkModeOn} onChange={() => setDarkModeOn(!darkModeOn)}  />}/>
            
        </Box>
    )
}

export default MuiSwitch