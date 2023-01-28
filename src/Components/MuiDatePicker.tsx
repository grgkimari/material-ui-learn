import { DatePicker } from "@mui/x-date-pickers"
import { TextField, TextFieldProps } from "@mui/material"
import { Stack } from "@mui/system"
import { useState } from "react"

const MuiDatePicker = () => {
    const [date, setDate] = useState<Date | null>(null)
    console.log(date)
    return(
        <Stack spacing={4} sx={{
            width : "250px"
        }}>
<DatePicker value={date} onChange={(newDate) => setDate(newDate)} label="Date of birth" renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params}/>} />
        </Stack>
    )
}

export default MuiDatePicker