import React, { Component } from 'react';
import { MegadraftEditor} from "megadraft";
import { editorStateToJSON } from 'megadraft/lib/utils';
import { connect } from 'react-redux';

class EditEntry extends Component {
    onChange = (editorState) => {
        const action = { type: 'EDIT_ENTRY', payload: editorState };
        this.props.dispatch(action);
    }
    onSaveClick = () => {
        const content = {text: editorStateToJSON(this.props.edit),id: this.props.entryID.id};
        const action = { type: 'EDIT_ENTRY_IN_DB', payload: content };        
        this.props.dispatch(action);
        this.props.history.push("/profile")
    }

    render() {
        return (
            <div>
                <h1>{this.props.entryID.entry_name}</h1>
                {Object.entries(this.props.edit).length !== 0 && <div>
                    <MegadraftEditor
                        editorState={this.props.edit}
                        onChange={this.onChange} />
                    <button onClick={this.onSaveClick}>
                        Save
                    </button>
                    
                </div>}
                {Object.entries(this.props.edit).length === 0 && <div>
                    No entry found
                </div>}
            </div>
        );
    }
}
const mapStoreToProps = reduxStore => ({
    entry: reduxStore.entry,
    edit: reduxStore.edit,
    entryID: reduxStore.entryID,
})
export default connect(mapStoreToProps)(EditEntry);