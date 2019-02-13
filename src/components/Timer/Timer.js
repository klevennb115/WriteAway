import React, {Component} from 'react';
import { connect } from 'react-redux';

class Timer extends Component {
    constructor(props) {
        super(props)
    }
    startTimer = () => {
        this.timer = setInterval(() => {
            const action = {type: 'INCREASE_TIMER',payload: 1};
            this.props.dispatch(action);
            // dispatch INCREASE_TIMER
        }, 1);
    }
    stopTimer = () => {
        if(this.timer) {
            clearInterval(this.timer);
        }
    }
    resetTimer = () => {
        // dispatch RESET_TIMER
    }
    render() {
        // check reducer to see if time is 0
        let start = <button onClick={this.startTimer}>start</button>;
        let stop = <button onClick={this.stopTimer}>Pause</button>;
        let reset =<button onClick={this.resetTimer}>reset</button>;
        // let currentTime = this.state.time/1000; //to make it look like seconds rather than millisecs
        return (
            <div>
                <h3>timer: </h3>
                {start}
                {stop}
                {reset}
            </div>
        )
    }
}
export default connect()(Timer);