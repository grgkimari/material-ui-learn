import { Box, ButtonGroup, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import React, { useState } from "react"


const MuiRadioButton = () => {

const [value, setValue] = useState('')

const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    console.log(value)
}

    return(
        <Box>
            <FormControl>
                <FormLabel>
                    Years of experience
                </FormLabel>
                <RadioGroup name="experience" value={value} onChange={handleChange} row>
                    <FormControlLabel control={<Radio color="secondary" />} label="0-2" value="0-2"/>
                    <FormControlLabel control={<Radio />} label="3-5" value="3-5"/>
                    <FormControlLabel control={<Radio />} label="6-10" value="6-10"/>
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default MuiRadioButton