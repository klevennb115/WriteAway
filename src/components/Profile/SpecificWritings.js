import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editorStateFromRaw } from "megadraft";


class SpecificWritings extends Component {
    editEntry = () => {
        
        const rawContents = editorStateFromRaw(JSON.parse(this.props.story.entry_contents));
        console.log('in editing', rawContents);
        const action = { type: 'EDIT_ENTRY', payload: rawContents };
        this.props.dispatch(action);
    //this will take them to a basic edit page which populates the 
    //RTE with the text of the entry THEN does a PUT
        this.props.history.push("/edit-writing");
    }
    deleteEntry = () => {
        const action = {type: 'DELETE_ENTRY', payload: this.props.story.id};
        this.props.dispatch(action);
    }   
    render() {
        console.log(this.props.story.entry_name);
        
        return (
            
                <tr>
                    <td>{this.props.story.entry_name}</td>
                <td><button onClick={this.editEntry}>
                    Edit
                </button></td>
                    <td><button onClick={this.deleteEntry}>Delete</button></td>
                </tr>
        )
    }
}
const mapStoreToProps = reduxStore => ({
    // store =reduxStore,
})
export default connect(mapStoreToProps)(SpecificWritings);