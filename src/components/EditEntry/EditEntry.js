import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditEntry extends Component {
    render() {
        return (
            <h1>DELETE THIS</h1>
        )
    }
}
const mapStoreToProps = reduxStore => ({
    // reduxStore,
})
export default connect(mapStoreToProps)(EditEntry);

{/* <Link className="nav-link link" to="/profile">
    Profile
                </Link> */}