import React, { Component } from 'react';
import { connect } from 'react-redux';

class DefaultComponent extends Component {
    renders() {
        return (
            <h1>Hi</h1>
        )
    }
}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})
export default connect(mapStoreToProps)(DefaultComponent);