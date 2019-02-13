import React, { Component } from 'react';
import { connect } from 'react-redux';


class SpecificWritings extends Component {
    editEntry = () => {
        console.log('in editing');
    //this will take them to a basic edit page which populates the 
    //RTE with the text of the entry THEN does a PUT
    }
    deleteEntry = () => {
        const action = {type: 'DELETE_ENTRY', payload: this.props.story.id};
        this.props.dispatch(action);
    }   
    render() {
        return (
            
                <tr>
                    <td>{this.props.story.entry_name}</td>
                    <td><button onClick={this.editEntry}>Edit</button></td>
                    <td><button onClick={this.deleteEntry}>Delete</button></td>
                </tr>
        )
    }
}
const mapStoreToProps = reduxStore => ({
    // store =reduxStore,
})
export default connect(mapStoreToProps)(SpecificWritings);