import React, { Component } from 'react';
import { connect } from 'react-redux';

class TextEditor extends Component {
    renders() {
        return (
            <h1>Hi</h1>
        )
    }
}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})
export default connect(mapStoreToProps)(TextEditor);