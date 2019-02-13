import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import '../TextEditor/megadraft.css';
import './TextEditor.css';
import { editorStateToJSON } from 'megadraft/lib/utils';
import {connect} from 'react-redux';
import Timer from '../Timer/Timer';
import CreativeWritingPrompt from '../TextEditor/TextEditorPrompts/CreativeWritingPrompt';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: editorStateFromRaw(null), timer: 0};
  }
  onChange = (editorState) => {
    this.setState({ editorState });
  }
  saveContent = () => {
      const {editorState} = this.state;
      const content = editorStateToJSON(editorState);
      console.log(content);
      //once tags are added, make sure all info is added before you can save
      const action = {type: 'ADD_ENTRY', payload: content}
      this.props.dispatch(action);
  }
  handleTimeChange = (event) =>{ // perhaps I should just send all data to child to post
      this.setState({timer: event})
  }
  wordsLeft = () => {
      let wordsInEditor = editorStateToJSON(this.state.editorState);
      let wordsTilGoal = 500;
      return wordsTilGoal - (wordsInEditor.split(' ').length-66); //66 is the length of the JSON string
  }
 
  render() {
    return (
      <div>
          <h3>Words Til Goal: {this.wordsLeft()}</h3>
          <Timer onSaveClick={this.handleTimeChange} 
            saveContent={this.saveContent}/>
        <p>
          Write Below
        </p>
        <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange} />
        <button onClick={this.saveContent}>Save</button>
            <CreativeWritingPrompt />
      </div>
    );
  }
}
ReactDOM.render(
  <TextEditor />,
  document.getElementById('react-root')
);
export default connect()(TextEditor);