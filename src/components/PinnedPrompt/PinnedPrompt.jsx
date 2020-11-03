import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import compose from 'recompose/compose';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 600,
    backgroundColor: 'beige',
    flex: 1, // not doing anything, probably
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const PinnedPrompt = (props) => {
  const showPrompt = () => {
    const { classes } = props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography component="p">
            {props.pinnedPrompt}
          </Typography>
        </Paper>
      </div>
    );
  };

  return (
    <div>
      {props.pinnedPrompt.length !== 0 && showPrompt()}
    </div>
  );
};

const mapStoreToProps = (state) => ({
  pinnedPrompt: state.pinnedPrompt,
});

export default compose(
  withStyles(styles),
  connect(mapStoreToProps),
)(PinnedPrompt);
