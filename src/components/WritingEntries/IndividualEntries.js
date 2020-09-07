import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { editorStateFromRaw } from "megadraft";
import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
var moment = require('moment');
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
class IndividualEntries extends Component {
    editEntry = () => {
        const entryID = this.props.row;
        const rawContents = editorStateFromRaw(JSON.parse(this.props.row.entry_contents));
        console.log('in editing', rawContents);
        const action = { type: 'EDIT_ENTRY', payload: rawContents };
        const secondAction = { type: 'EDIT_ID', payload: entryID };
        this.props.dispatch(action);
        this.props.dispatch(secondAction);
        //this will take them to a basic edit page which populates the 
        //RTE with the text of the entry THEN does a PUT
        this.props.history.push("/edit-writing");
    }
    deleteEntry = () => {
        const action = { type: 'DELETE_ENTRY', payload: this.props.row.id };
        this.props.dispatch(action);
    }
    render() {
        return (

                <TableRow >
                    <TableCell component="th" scope="row">
                        {this.props.row.entry_name}
                    </TableCell>
                    <TableCell align="right">{this.props.row.entry_genre}</TableCell>
                    <TableCell align="right">{moment(this.props.row.submission_time).format('MMMM Do YYYY')}</TableCell>
                    <TableCell align="right">{moment.utc(this.props.row.entry_time_length).format("HH:mm:ss")}</TableCell>
                    <TableCell align="right">{this.props.row.entry_prompt}</TableCell>
                    <TableCell align="right"><button onClick={this.editEntry}>Edit</button></TableCell>
                    <TableCell align="right"><button onClick={this.deleteEntry}>Delete</button></TableCell>
                </TableRow>


        )
    }
}

IndividualEntries.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStoreToProps = reduxStore => ({
    entry: reduxStore.entry,
    // story: reduxStore.story
})

export default compose(
    withStyles(styles),
    connect(mapStoreToProps)
)(IndividualEntries)

