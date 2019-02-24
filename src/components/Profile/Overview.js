import React, { Component } from 'react';
import { connect } from 'react-redux';
var moment = require('moment');

class Overview extends Component {
    timeAvg = () => {
        let times = 0;
        let numberOfEntries = this.props.entry.length;
        this.props.entry.map((story) => {
            times += story.entry_time_length

            return console.log(moment.utc(times/numberOfEntries).format("HH:mm:ss"));
        })
        return (moment.utc(times / numberOfEntries).format("HH:mm:ss"));
    }
    editGoal = () => {
        swal("Write something here:", {
            content: "input",
        })
            .then((value) => {
                swal(`You typed: ${value}`);
            });
    }

    render() {
        return (
            <div>
                <h1>Profile Overview</h1>
                <h2>{this.props.user.username}</h2>
                <h2>Total number of entries: {this.props.entry.length}</h2>
                <h2>Average Writing Time: {this.timeAvg()}</h2>
                <h2>Word Goal: {this.props.user.word_goal} <button onClick={this.editGoal}>Edit</button></h2>
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