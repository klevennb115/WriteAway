import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IndividualEntries from './IndividualEntries';

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


class WritingEntries extends Component {
    componentDidMount() {
        this.getEntries();
    }
    getEntries = () => {
        this.props.dispatch({ type: 'GET_ENTRIES' });
    }
    SimpleTable =() => {
        const { classes } = this.props;

        return (

            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell >Title</TableCell>
                            <TableCell >Genre</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Time Spent Writing</TableCell>
                            <TableCell>Prompt</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell >Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.populateTable()}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
    populateTable = () => {
        
        return this.props.entry.map((row, i) => {

            return (<IndividualEntries history={this.props.history} key={i} row={row} />)
    })}
    render(){
        return (
            <div>         
                {this.props.entry.length !== 0 && 
                    this.SimpleTable()}
            </div>

        )
    }
}

WritingEntries.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStoreToProps = reduxStore => ({
    entry: reduxStore.entry,
})

export default compose(
    withStyles(styles),
    connect(mapStoreToProps)
)(WritingEntries)

