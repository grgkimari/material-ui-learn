import { Rating, Stack } from "@mui/material"
import React, { useState } from "react"



const MuiRating = () => {
    const[rating, setRating] = useState(0)

async function handleChange(event : React.SyntheticEvent, newValue : (number | null)) {
    if(typeof newValue === 'number'){
        setRating(newValue)
    }
    console.log(rating)
}

    return(
        <Stack>
            <Rating size="large" value={rating} onChange={handleChange} precision={0.25}/>
        </Stack>
    )
}

export default MuiRating