import React, { Component } from 'react';
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import '../TextEditor/megadraft.css';
import './TextEditor.css';
import { editorStateToJSON } from 'megadraft/lib/utils';
import {connect} from 'react-redux';
// import Timer from '../Timer/Timer';
import PromptButton from '../TextEditor/TextEditorPrompts/PromptButton'
import CreativeWritingPrompt from '../TextEditor/TextEditorPrompts/CreativeWritingPrompt';
import Genre from '../Genre/Genre';
var moment = require('moment');  //needed to timestamp submission

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
    const content = { text: editorStateToJSON(editorState), title: this.state.title, genre: this.props.genreSave, subTime: moment()._d };
      //once tags are added, make sure all info is added before you can save
    console.log(content);
    
    if (this.state.title !== '') {
      const action = {type: 'ADD_ENTRY', payload: content}
      this.props.dispatch(action);
    } else {
        alert("Make sure to name your story!");;
    }
  }
 countWords = (s) => {   //word counter found on stack overflow. Counts line breaks as 16 words.
     s = s.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
     s = s.replace(/[ ]{2,}/gi, " ");//2 or more space to 1
     s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
     return s.split(' ').filter(function (str) { return str !== ""; }).length;
      //return s.split(' ').filter(String).length; - this can also be used
 }
  wordsLeft = () => {
    let wordsInEditor = editorStateToJSON(this.state.editorState);
    let wordsCounted = this.countWords(wordsInEditor);
    let wordsTilGoal = 500;
    return wordsTilGoal - (wordsCounted-21); //66 is the length of the JSON string
  }
  titleChange = (event) => {
    this.setState({ title: event.target.value })
  }
 
  render() {
    return (
      <div >
        <div className="editor-header header">
          <div className="editor-header">
            <h2>Title:</h2>
            <input className="title" placeholder="Title" onChange={this.titleChange}></input>
          </div>
          
          <h3>Words Til Goal: {this.wordsLeft()}</h3>
        </div>
        
          {/* <Timer onSaveClick={this.handleTimeChange} 
            saveContent={this.saveContent}/> */}
        
      
        <PromptButton />
        <div id="editorContainer">        
          <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange} />
        </div>

        <button onClick={this.saveContent} className="save-button">Save</button>
        <CreativeWritingPrompt />
        <Genre />
      </div>
    );
  }
}

const mapStoreToProps = state => ({
  genreSave: state.genreSave,
});
export default connect(mapStoreToProps)(TextEditor);