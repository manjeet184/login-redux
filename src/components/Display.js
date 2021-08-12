import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Table,
} from '@material-ui/core'

const Display = (props) => {
  const data = props.item.inputData.inputItem
  console.log('Display called', data)
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 &&
              data.map((item, index) => {
                console.log(item, 'item...')
                return (
                  <TableRow key={index}>
                    <TableCell align="left">{item && index + 1}</TableCell>
                    <TableCell align="left">
                      {item && item.inputData.userName}
                    </TableCell>
                    <TableCell align="left">
                      {item && item.inputData.userEmail}
                    </TableCell>
                    <TableCell align="left">
                      {item && item.inputData.userMobile}
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        color="inherit"
                        S
                        size="small"
                        onClick={() => props.item.removeHandler(index)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Display
