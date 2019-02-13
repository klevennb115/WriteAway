import React, { Component } from 'react';
import { connect } from 'react-redux';


class SpecificWritings extends Component {
    render() {
        return (
            
                <tr>
                    <td>{this.props.story.entry_name}</td>
                </tr>
        )
    }
}
const mapStoreToProps = reduxStore => ({
    // store =reduxStore,
})
export default connect(mapStoreToProps)(SpecificWritings);