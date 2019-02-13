import React, {Component} from 'react';
import { connect } from 'react-redux';

class Timer extends Component {
    constructor(props) {
        super(props)
    }
    startTimer = () => {
        this.writingTimer = setInterval(() => {  //renamed from timer so as not to confuse with the reducer
            const action = {type: 'INCREASE_TIMER',payload: 1};
            this.props.dispatch(action);
            // dispatch INCREASE_TIMER
        }, 1);
    }
    stopTimer = () => {
        if(this.timer) {
            clearInterval(this.writingTimer);
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
                <h3>timer: {this.props.timer}</h3>
                {start}
                {stop}
                {reset}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    timer: state.timer,
});

export default connect(mapStateToProps)(Timer);