import { Box, Divider, Grid, Paper, Stack } from "@mui/material";

const MuiLayout = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        padding: "32px",
      }}
    >
      <Stack
        border="1px solid"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        direction="row-reverse"
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Codevolution
        </Box>

        <Box height="100px" width="100px" bgcolor={"success.light"}></Box>
      </Stack>
      <Grid container spacing={2} margin={2}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"success.dark"}>Item 1</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"success.dark"}>Item 2</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"success.dark"}>Item 3</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"success.dark"}>Item 4</Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
