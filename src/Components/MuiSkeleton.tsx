import { Skeleton, Stack } from "@mui/material"

const MuiSkeleton = () => {
    return(
        <Stack spacing={1} width="250px">
            <Skeleton  variant="circular" width="80px" height="80px"/>
            <Skeleton  variant="text" />
            <Skeleton  variant="rectangular" height={"100px"} animation="wave" />
        </Stack>
    )
}

export default MuiSkeleton