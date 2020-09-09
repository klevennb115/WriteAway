import React from 'react';
import { MegadraftEditor} from "megadraft";
import { editorStateToJSON } from 'megadraft/lib/utils';
import { connect } from 'react-redux';

const EditEntry = (props) => {

    const onChange = (editorState) => {
        const action = { type: 'EDIT_ENTRY', payload: editorState };
        props.dispatch(action);
    }
    const onSaveClick = () => {
        const content = {text: editorStateToJSON(props.edit),id: props.entryID.id};
        const action = { type: 'EDIT_ENTRY_IN_DB', payload: content };        
        props.dispatch(action);
        props.history.push("/profile")
    }

    return (
        <div>
        <h1>{props.entryID.entry_name}</h1>
        {Object.entries(props.edit).length !== 0 && <div>
            <MegadraftEditor
                editorState={props.edit}
                onChange={onChange} />
            <button onClick={onSaveClick}>
                Save
            </button>
            
        </div>}
        {Object.entries(props.edit).length === 0 && <div>
            No entry found
        </div>}
    </div>
      );
}
 
const mapStoreToProps = reduxStore => ({
    entry: reduxStore.entry,
    edit: reduxStore.edit,
    entryID: reduxStore.entryID,
})

export default connect(mapStoreToProps)(EditEntry);