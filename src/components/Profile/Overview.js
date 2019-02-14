import React, { Component } from 'react';
import { connect } from 'react-redux';

class Overview extends Component {
    render() {
        return (
            <div>
                <h1>Profile Overview</h1>
            </div>

        )
    }
}
const mapStoreToProps = reduxStore => ({
    prompt: reduxStore.prompt, // only map prompt reducer
    // another: reduxStore.another,
})
export default connect(mapStoreToProps)(Overview);