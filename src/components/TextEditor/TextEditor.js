import React, { Component } from 'react';
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import { editorStateToJSON } from 'megadraft/lib/utils';
import '../TextEditor/megadraft.css';
import './TextEditor.css';
import {connect} from 'react-redux';
import PromptButton from '../PromptButton/PromptButton'
import Genre from '../Genre/Genre';
import PinnedPrompt from '../PinnedPrompt/PinnedPrompt';
import PropTypes from 'prop-types'; //materialUI stuff

var moment = require('moment');  //needed to timestamp submission

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: editorStateFromRaw(null), 
      title: '',
      entry_length: '',
      time: moment(),
      word_length: 0
  };
  }
  componentDidMount(){
    this.clearPinnedPrompt();
  }
  clearPinnedPrompt = () => {
    let action = {
      type: 'PIN_PROMPT',
      payload: []
    }
    this.props.dispatch(action);
  }
  onChange = (editorState) => {  //on change in the editor
    this.setState({ editorState });
  }
  saveContent = () => {
    let endTime = moment();
    let newTime = endTime.diff(this.state.time);
    const pinPrompt = this.props.pinnedPrompt;
    const {editorState} = this.state;
    const content = { text: editorStateToJSON(editorState), title: this.state.title, genre: this.props.genreSave, time_length: newTime, entry_length: this.countWords(editorStateToJSON(this.state.editorState)), entry_prompt: pinPrompt, subTime: moment()._d };
    
    if (this.state.title !== '') {
      const action = {type: 'ADD_ENTRY', payload: content}
      this.props.dispatch(action);
      this.props.history.push("/home");
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
    let wordsTilGoal = this.props.user.word_goal - (wordsCounted - 21);  //21 is the length of the JSON string
    if (wordsTilGoal <= 0) {
      return 'Goal Reached!'  //need to fix
    } else {
      return wordsTilGoal
    }
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
      
        
        <div className="pinned-content"><PinnedPrompt /></div>
        
        <div id="editorContainer">        
          <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange} />
        </div>
        <div className="text-editor-buttons">
          <PromptButton />
          <Genre />
          <button onClick={this.saveContent} className="ph-button">Save</button>
        </div>
        
      </div>
    );
  }
}
TextEditor.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStoreToProps = state => ({
  user: state.user,
  genreSave: state.genreSave,
  pinnedPrompt: state.pinnedPrompt
});
export default connect(mapStoreToProps)(TextEditor);