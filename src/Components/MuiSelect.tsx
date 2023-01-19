import { Box, MenuItem, TextField } from "@mui/material"
import React, { useState } from "react"


const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([])

const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
}

    return(
        <Box width="250px">
            
        </Box>
    )
}

export default MuiSelect