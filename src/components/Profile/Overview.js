import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import './Overview.css';
var moment = require('moment');

class Overview extends Component {
    constructor(props){
        super(props);
        this.state = {
            rerender: false
        }
    }
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
        swal("Choose a new goal. Challenge yourself:", {
            content: "input",
        })
            .then((value) => {
                let action = {
                    type: 'EDIT_GOAL',
                    payload: {newGoal: value, id: this.props.user.id}
                }
                this.props.dispatch(action);
                window.location.reload();  //reloads so you can see new goal
                // swal(`Your new goal is: ${value}`);
            });
    }

    render() {
        return (
            <div >
                <div><h1 id='overview'>Profile Overview</h1></div>
                <div className='user'><h2 >{this.props.user.username}</h2></div>
                <div className='overview'>
                    <h4 >Longest Streak: {this.props.user.current_streak}</h4>
                    <h4 >Total number of entries: {this.props.entry.length}</h4>
                    <h4 >Average Writing Time: {this.timeAvg()}</h4>
                    <h4 >Word Goal: {this.props.user.word_goal} <button onClick={this.editGoal}>Edit</button></h4>
                </div>

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