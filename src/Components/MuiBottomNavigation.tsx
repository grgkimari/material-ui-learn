import { Favorite, Home, Person } from "@mui/icons-material"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { useState } from "react"

const MuiBottomNavigation = () => {
    const[activeAction, setActiveAction] = useState(0)
    return(
        <BottomNavigation sx={{
            width: "90%",
            position : "absolute",
            bottom : 0,
        }} value={activeAction} onChange ={ (event, newValue) => {
            setActiveAction(newValue)
        }}>
            <BottomNavigationAction label="Home" icon={<Home />}/>
            <BottomNavigationAction label="Favorites" icon={<Favorite />}/>
            <BottomNavigationAction label="Profile" icon={<Person />}/>
        </BottomNavigation>
    )
}

export default MuiBottomNavigation