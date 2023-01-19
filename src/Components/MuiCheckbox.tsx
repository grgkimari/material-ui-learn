import { CheckBox } from "@mui/icons-material"
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material"
import React, { useState } from "react"
import BookMarkIcon from '@mui/icons-material/Bookmark'
import BookMarkBorderIcon from '@mui/icons-material/Bookmark'



const MuiCheckbox = () => {

const [accepted, setAccepted] = useState(false)
const [skills, setSkills] = useState<string[]>([])

const handleChange = async(event : React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)
    if(index === -1){
        setSkills([...skills, event.target.value])
            }
            else{
                setSkills(skills.filter((value) => value !== event.target.value))
            }
}

    return(
        <Box>
            <Box>
                <FormControlLabel label="I accept terms and conditions" control={<Checkbox size="small" color="secondary" checked={accepted} onChange={() => setAccepted(!accepted)}/>}/>
            </Box>
            <Box>
                <Checkbox icon={<BookMarkBorderIcon />} checkedIcon={<BookMarkIcon />} />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup onChange={handleChange} >
                        <FormControlLabel label="" value="HTML" checked={skills.includes('HTML')} control={<Checkbox />}/>
                        <FormControlLabel label="" value="CSS" checked={skills.includes('CSS')} control={<Checkbox />}/>
                        <FormControlLabel label="" checked={skills.includes('Javascript')} value="Javascript" control={<Checkbox />}/>
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}

export default MuiCheckbox