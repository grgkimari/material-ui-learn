import { Stack, Button, IconButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () =>{
    return(
        <Stack>
            <Stack spacing={2} direction="row">
            <Button variant="text" href="https://www.google.com">Text</Button>
            <Button variant="contained" color="success">Contained</Button>
            <Button variant="outlined">Outlined</Button>

        </Stack>
        <Stack spacing={2} direction="column" >
            <Button variant="outlined" color="primary">Primary</Button>
            <Button variant="outlined" color="secondary">secondary</Button>
            <Button variant="outlined" color="error">error</Button>
            <Button variant="outlined" color="warning">warning</Button>
            <Button variant="outlined" color="info">info</Button>
            <Button variant="outlined" color="success">success</Button>
        </Stack>
        <Stack display="block" spacing={2} direction="row">
            <Button variant="contained" size="small">small</Button>
            <Button variant="contained" size="medium">medium</Button>
            <Button variant="contained" size="large">large</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            <Button variant="contained" endIcon ={<SendIcon />}>Send</Button>
            <IconButton aria-label="send" size="small">
                <SendIcon color="error" />
            </IconButton>
        </Stack>
        </Stack>
        
            
    )
}

export default MuiButton