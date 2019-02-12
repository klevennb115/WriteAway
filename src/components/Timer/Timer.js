import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            start: 0,
            isOn: false
        }
    }
    startTimer = () => {
        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time,
            isOn: true
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }
    stopTimer = () => {
        this.setState({ isOn: false })
        clearInterval(this.timer)
    }
    resetTimer = () => {
        this.setState({ time: 0 })
    }
    render() {
        let start = (this.state.time === 0) ?
            <button onClick={this.startTimer}>start</button> :
            null
        let stop = (this.state.isOn) ?
            <button onClick={this.stopTimer}>stop</button> :
            null
        let reset = (this.state.time !== 0 && !this.state.isOn) ?
            <button onClick={this.resetTimer}>reset</button> :
            null
        let resume = (this.state.time !== 0 && !this.state.isOn) ?
            <button onClick={this.startTimer}>resume</button> :
            null
        return (
            <div>
                <h3 value={this.state.time}>timer: {this.state.time/1000}</h3>
                {start}
                {resume}
                {stop}
                {reset}
            </div>
        )
    }
}
export default Timer;