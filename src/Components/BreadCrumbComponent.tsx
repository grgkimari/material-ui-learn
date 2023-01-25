import { Box, Breadcrumbs, Link, Typography } from "@mui/material"

const BreadCrumbComponent = () => {
    return(
        <Box m={2}>
<Breadcrumbs aria-label="breadcrumb" separator=">>" maxItems={3}>
    <Link underline="hover" href="#">Home</Link>
    <Link underline="hover" href="#">Catalogue</Link>
    <Link underline="hover" href="#">Accessories</Link>
    <Typography color="text.primary">Shoes</Typography>
</Breadcrumbs>
        </Box>
    )
}

export default BreadCrumbComponent