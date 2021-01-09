import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  {
    id: 'item',
    label: "Item",
    minWidth: 10,
    align: 'left'
  },

  {
    id: 'location',
    label: "Location",
    minWidth: 10,
    align: 'center'
  },

  {
    id: 'planned',
    label: "Planned",
    minWidth: 10,
    align: 'center'
  },

  {
    id: 'actual',
    label: "Actual",
    minWidth: 10,
    align: 'center'
  },

  {
    id: 'difference',
    label: "Difference",
    minWidth: 10,
    align: 'center'
  },
]

const createData = (item, location, planned, actual) => {
  const difference = planned / actual;
  return { item, location, planned, actual, difference };
}

const rows = [
  createData('Zelle-Greysi', "ALLY", 100.00, 100.00),
  createData('eCheck', "ALLY", 250.00, 250.00),
  createData('Zelle-Greysi', "ALLY", 50.00, 50.00),
  createData('eCheck', "ALLY", 240.00, 240.00),
  createData('Zelle-Greysi', "ALLY", 50.00, 50.00),
  createData('eCheck', "ALLY", 120.00, 120.00),
  createData('eCheck', "ALLY", 175.00, 175.00),
  createData('eCheck', "ALLY", 120.00, 120.00),
  createData('Zelle-Greysi', "ALLY", 200.00, 200.00),
  createData('eCheck', "ALLY", 100.00, 100.00),
  createData('eCheck', "ALLY", 250.00, 250.00),
  createData('Zelle-Greysi', "ALLY", 100.00, 100.00),
  createData('Zelle-Greysi', "ALLY", 100.00, 100.00),
  createData('Zelle-Greysi', "ALLY", 100.00, 100.00),
  createData('Zelle-Greysi', "ALLY", 100.00, 100.00),



]


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function IncomeTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>

        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>


          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


