import React, { Component } from 'react';
import { connect } from 'react-redux';


class SpecificWritings extends Component {
    render() {
        return (
            <div>
                <tr>
                    <td>{this.props.story.entry_name}</td>
                </tr>
            </div>

        )
    }
}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})
export default connect(mapStoreToProps)(SpecificWritings);