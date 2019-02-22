import React, { Component } from 'react';
import { connect } from 'react-redux';

class Overview extends Component {
    render() {
        return (
            <div>
                <h1>Profile Overview</h1>
                <h2>{this.props.user.username}</h2>
                <h2>Total number of entries: {this.props.entry.length}</h2>
                <h2>Word Goal: {this.props.user.word_goal}</h2>
            </div>

        )
    }
}
const mapStoreToProps = reduxStore => ({
    entry: reduxStore.entry, // only map prompt reducer
    user: reduxStore.user
    // another: reduxStore.another,
})
export default connect(mapStoreToProps)(Overview);