import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';

const MuiCard = () => {
    return(
        <Box width="300px">
            <Card>
                <CardMedia 
                component="img"
                height="140px"
                image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="React logo image"
                />
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        React
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsum sunt aspernatur ex tempore necessitatibus quas? Sapiente atque possimus ratione.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container spacing={1}>
                    <Grid item xs={6}>
                    <Button variant="outlined" size="small" fullWidth title="Share"><ShareIcon /></Button>
                    </Grid>
                    <Grid item xs={6}>
                    <Button variant="outlined" size="small" fullWidth title="Learn more"><InfoIcon /></Button>
                    </Grid>
                    
                    </Grid>
                </CardActions>
            </Card>
        </Box>
    )
}

export default MuiCard