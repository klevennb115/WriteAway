import React, { Component } from 'react';
import { MegadraftEditor} from "megadraft";
import '../TextEditor/megadraft.css';
// import './TextEditor.css';
import { editorStateToJSON } from 'megadraft/lib/utils';
import { connect } from 'react-redux';
// import CreativeWritingPrompt from '../TextEditor/TextEditorPrompts/CreativeWritingPrompt';

class EditEntry extends Component {

    //GamePlan: Need to figure out how to wait til the redux-store is loaded before rendering
    onChange = (editorState) => {
        const action = { type: 'EDIT_ENTRY', payload: editorState };
        this.props.dispatch(action);
    }
    onSaveClick = () => {
        const content = {text: editorStateToJSON(this.props.edit),id: this.props.entryID.id};
        console.log(editorStateToJSON(this.props.edit));
        // console.log(editorStateFromRaw);
        
        
        // console.log('!!!!!!!!', this.props.entry);
        // console.log(this.props.entryID);
        const action = { type: 'EDIT_ENTRY_IN_DB', payload: content };
        console.log(action);
        
        this.props.dispatch(action);
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