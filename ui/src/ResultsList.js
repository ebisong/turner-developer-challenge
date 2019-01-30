import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function ResultsList(props) {
  const { classes, titles } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title ID</TableCell>
            <TableCell align="right">Title Name</TableCell>
            <TableCell align="right">Release Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {titles.map(title => (
            <TableRow key={title.TitleId}>
              <TableCell component="th" scope="row">
                {title.TitleId}
              </TableCell>
              <TableCell align="right">{title.TitleName}</TableCell>
              <TableCell align="right">{title.ReleaseYear}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

ResultsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultsList);
