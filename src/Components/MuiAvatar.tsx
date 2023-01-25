import { Avatar, AvatarGroup } from "@mui/material"
import { Stack } from "@mui/system"

const MuiAvatar = () => {

    return(
        <Stack spacing={4}>
            <Stack direction={"row"} spacing={1}>
                <AvatarGroup max={3}>
                <Avatar sx={{
                    backgroundColor : "primary.light"
                }}>BW</Avatar>
                <Avatar sx={{
                    backgroundColor : "success.light"
                }}>CK</Avatar>
        
                <Avatar sx={{
                    backgroundColor : "primary.light"
                }} src="https://randomuser.me/api/potraits/women/79.jpg" alt="Jane Doe"/>
                <Avatar sx={{
                    backgroundColor : "success.light"
                }} src="https://randomuser.me/api/potraits/men/51.jpg" alt="John Doe"/>
                </AvatarGroup>
            </Stack>
        </Stack>
    )


}

export default MuiAvatar