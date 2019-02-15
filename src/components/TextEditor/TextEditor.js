import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import '../TextEditor/megadraft.css';
import './TextEditor.css';
import { editorStateToJSON } from 'megadraft/lib/utils';
import {connect} from 'react-redux';
import Timer from '../Timer/Timer';
import CreativeWritingPrompt from '../TextEditor/TextEditorPrompts/CreativeWritingPrompt';
import Genre from '../Genre/Genre';

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: editorStateFromRaw(null), title: ''};
  }
  onChange = (editorState) => {  //on change in the editor
    this.setState({ editorState });
  }
  saveContent = () => {
    const {editorState} = this.state;
    const content = { text: editorStateToJSON(editorState), title: this.state.title };
      //once tags are added, make sure all info is added before you can save
  
    if (this.state.title !== '') {
      const action = {type: 'ADD_ENTRY', payload: content}
      this.props.dispatch(action);
    } else {
        alert("Make sure to name your story!");;
    }
  }
  changeGenre = () => {
    this.props.dispatch({ type: 'GET_GENRES' });
    // <Genre />
  }
  wordsLeft = () => {
    let wordsInEditor = editorStateToJSON(this.state.editorState);
    console.log('in wordsLeft',  JSON.parse(wordsInEditor).blocks);
    
    let wordsTilGoal = 500;
    return wordsTilGoal - (wordsInEditor.split(' ').length-66); //66 is the length of the JSON string
  }
  titleChange = (event) => {
    this.setState({ title: event.target.value })
  }
 
  render() {
    return (
      <div>
          <h3>Words Til Goal: {this.wordsLeft()}</h3>
          {/* <Timer onSaveClick={this.handleTimeChange} 
            saveContent={this.saveContent}/> */}
        <input placeholder="Title" onChange={this.titleChange}></input>
        <p>
          Write Below
        </p>
        <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange} />
        <button onClick={this.saveContent}>Save</button>
        <CreativeWritingPrompt />
        {this.wordsLeft()}
      </div>
    );
  }
}
export default connect()(TextEditor);