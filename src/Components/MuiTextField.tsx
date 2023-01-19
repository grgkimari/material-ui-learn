import { InputAdornment, TextField } from "@mui/material"
import { Stack } from "@mui/system"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";


const MuiTextField = () => {

    const [isVisible, setVisibility] = useState<boolean>(false)

    return(
        <Stack spacing={4} direction="column">
            <TextField disabled helperText="This field is mandatory." size="small" color="success" label="name" variant="outlined"/>
            <TextField  label="password" type="password" variant="filled"/>
            <TextField  color="secondary"required label="name" variant="standard"/>
            <TextField  value="kababaye" label="Read Only" variant="standard" InputProps={{
                readOnly : true
            }}/>
            <TextField type="number" label="Weight" InputProps={
                {
                    endAdornment : <InputAdornment position="end">Kg</InputAdornment>
                }
            }></TextField>
            <TextField type="number" label="Amount" error InputProps={
                {
                    startAdornment : <InputAdornment position="start">$</InputAdornment>
                }
            }></TextField>
            <TextField type={isVisible ? "text" : "password"} label="Password 2" InputProps={
                {
                    endAdornment : <InputAdornment position="end" onClick={
                        () => {
                            setVisibility(!isVisible)
                        }
                    }>{isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}</InputAdornment>
                }
            }></TextField>
        </Stack>
    )
}

export default MuiTextField