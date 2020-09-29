import React from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
var moment = require('moment');

const ProfileOverview = (props) => {
    const timeAvg = () => {
        let times = 0;
        let numberOfEntries = props.entry.length;
        props.entry.forEach((story) => {
            times += story.entry_time_length
        })
        return (moment.utc(times / numberOfEntries).format("HH:mm:ss"));
    }

    const editGoal = () => {
        swal("Choose a new goal. Challenge yourself:", {
            content: "input",
        })
            .then((value) => {
                let action = {
                    type: 'EDIT_GOAL',
                    payload: {newGoal: value, id: props.user.id}
                }
                props.dispatch(action);
                window.location.reload();  //Get rid of this- 2020 useState
            });
    }

    return (
        <div >
            <div><h1 id='overview'>Profile Overview</h1></div>
            <div className='user'><h2 >{props.user.username}</h2></div>
            <div className='overview'>
                <h4 >Longest Streak: {props.user.current_streak}</h4>
                <h4 >Total number of entries: {props.entry.length}</h4>
                <h4 >Average Writing Time: {timeAvg()}</h4>
                <h4 >Word Goal: {props.user.word_goal} <button onClick={editGoal} >Edit</button></h4>
            </div>

        </div>

    )
}
 
const mapStoreToProps = reduxStore => ({
    entry: reduxStore.entry, 
    user: reduxStore.user
})
export default connect(mapStoreToProps)(ProfileOverview);