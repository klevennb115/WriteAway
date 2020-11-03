import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { editorStateFromRaw } from 'megadraft';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const moment = require('moment');

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

const IndividualEntries = (props) => {
  const row = { props };

  const editEntry = () => {
    const entryID = row;
    const rawContents = editorStateFromRaw(JSON.parse(row.entry_contents));
    const action = { type: 'EDIT_ENTRY', payload: rawContents };
    const secondAction = { type: 'EDIT_ID', payload: entryID };
    props.dispatch(action);
    props.dispatch(secondAction);
    // this will take them to a basic edit page which populates the
    // RTE with the text of the entry THEN does a PUT
    props.history.push('/edit-writing');
  };
  const deleteEntry = () => {
    const action = { type: 'DELETE_ENTRY', payload: row.id };
    props.dispatch(action);
  };
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.entry_name}
      </TableCell>
      <TableCell align="right">{row.entry_genre}</TableCell>
      <TableCell align="right">
        {moment(row.submission_time).format('MMMM Do YYYY')}
      </TableCell>
      <TableCell align="right">
        {moment.utc(row.entry_time_length).format('HH:mm:ss')}
      </TableCell>
      <TableCell align="right">{row.entry_prompt}</TableCell>
      <TableCell align="right">
        <button type="button" onClick={editEntry}>
          Edit
        </button>
      </TableCell>
      <TableCell align="right">
        <button type="button" onClick={deleteEntry}>
          Delete
        </button>
      </TableCell>
    </TableRow>
  );
};

const mapStoreToProps = (reduxStore) => ({
  entry: reduxStore.entry,
  // story: reduxStore.story
});

export default compose(
  withStyles(styles),
  connect(mapStoreToProps),
)(IndividualEntries);
