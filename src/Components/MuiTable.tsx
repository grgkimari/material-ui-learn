import { Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const MuiTable = () => {
    const tableData = [{
        "id": 1,
        "first_name": "Ernesto",
        "last_name": "Pieper",
        "email": "epieper0@sitemeter.com",
        "gender": "Male",
        "ip_address": "179.220.14.23"
      }, {
        "id": 2,
        "first_name": "Emerson",
        "last_name": "Crutchley",
        "email": "ecrutchley1@t.co",
        "gender": "Male",
        "ip_address": "7.150.2.110"
      }, {
        "id": 3,
        "first_name": "Myrlene",
        "last_name": "Aynscombe",
        "email": "maynscombe2@independent.co.uk",
        "gender": "Agender",
        "ip_address": "79.112.226.7"
      }, {
        "id": 4,
        "first_name": "Sammy",
        "last_name": "Grigsby",
        "email": "sgrigsby3@ihg.com",
        "gender": "Male",
        "ip_address": "125.174.61.218"
      }, {
        "id": 5,
        "first_name": "Belita",
        "last_name": "Loomes",
        "email": "bloomes4@dyndns.org",
        "gender": "Female",
        "ip_address": "95.247.249.21"
      }, {
        "id": 6,
        "first_name": "Weider",
        "last_name": "Jenkison",
        "email": "wjenkison5@blogs.com",
        "gender": "Male",
        "ip_address": "195.223.228.48"
      }, {
        "id": 7,
        "first_name": "Eugenia",
        "last_name": "Episcopi",
        "email": "eepiscopi6@w3.org",
        "gender": "Female",
        "ip_address": "243.118.122.17"
      }, {
        "id": 8,
        "first_name": "Elladine",
        "last_name": "Arr",
        "email": "earr7@weather.com",
        "gender": "Female",
        "ip_address": "1.183.238.71"
      }, {
        "id": 9,
        "first_name": "Pam",
        "last_name": "Gurys",
        "email": "pgurys8@clickbank.net",
        "gender": "Female",
        "ip_address": "69.66.7.214"
      }, {
        "id": 10,
        "first_name": "Bern",
        "last_name": "D'Ambrogio",
        "email": "bdambrogio9@rediff.com",
        "gender": "Male",
        "ip_address": "179.203.124.108"
      }]
    return(
        <TableContainer component={Paper} sx={{
            maxHeight : "400px",
        }}>
            <Table stickyHeader >
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell align="center">Gender</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => {
                        return(
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell align="center">{row.gender}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
                
            </Table>
        </TableContainer>
    )
}

export default MuiTable