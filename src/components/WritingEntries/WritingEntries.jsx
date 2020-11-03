import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import compose from 'recompose/compose';
import IndividualEntries from './IndividualEntries';

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },

});

const WritingEntries = (props) => {
  const getEntries = () => {
    props.dispatch({ type: 'GET_ENTRIES' });
  };

  useEffect(() => {
    getEntries();
  }, []);

  const { classes } = props;

  const populateTable = () => {
    props.entry.map((row) => (<IndividualEntries history={props.history} row={row} />));
  };
  const SimpleTable = () => (

    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time Spent Writing</TableCell>
            <TableCell>Prompt</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {populateTable()}
        </TableBody>
      </Table>
    </Paper>
  );

  return (
    <div>
      {props.entry.length !== 0
                    && SimpleTable()}
    </div>

  );
};

const mapStoreToProps = (reduxStore) => ({
  entry: reduxStore.entry,
});

export default compose(
  withStyles(styles),
  connect(mapStoreToProps),
)(WritingEntries);
