import React, { Component } from 'react';
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
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

    // textToEditor = (e) => {
    //     console.log(e);
    //     const editorState = editorStateFromRaw(e);
    //     this.setState = { editorState };
    // }

    onSaveClick = () => {
        const content = editorStateToJSON(this.props.edit);
        // Your function to save the content
        // save_my_content(content);
        console.log(content);
    }

    render() {
        return (
            <div>
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
    edit: reduxStore.edit
})
export default connect(mapStoreToProps)(EditEntry);