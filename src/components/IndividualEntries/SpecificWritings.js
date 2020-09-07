import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editorStateFromRaw } from "megadraft";


class IndividualEntries extends Component {
    editEntry = () => {
        const entryID = this.props.story;
        const rawContents = editorStateFromRaw(JSON.parse(this.props.story.entry_contents));
        const action = { type: 'EDIT_ENTRY', payload: rawContents };
        const secondAction = { type: 'EDIT_ID', payload: entryID };
        this.props.dispatch(action);
        this.props.dispatch(secondAction);
        this.props.history.push("/edit-writing");
    }
    deleteEntry = () => {
        const action = {type: 'DELETE_ENTRY', payload: this.props.story.id};
        this.props.dispatch(action);
    }   
    render() {
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

export default IndividualEntries;