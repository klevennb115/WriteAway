/* eslint-disable no-alert */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { editorStateFromRaw } from 'megadraft';
import { editorStateToJSON } from 'megadraft/lib/utils';
import './megadraft.css';
import './TextEditor.css';
import { connect } from 'react-redux';
import {
  Container, Col, Row, Button,
} from 'react-bootstrap';
import PromptButton from '../PromptButton/PromptButton';
import Genre from '../Genre/Genre';
import PinnedPrompt from '../PinnedPrompt/PinnedPrompt';
import * as wordCountService from '../../services/wordCounterService';
import EditorContainer from '../../containers/EditorContainer/EditorContainer';

const moment = require('moment'); // needed to timestamp submission

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: editorStateFromRaw(null),
      title: '',
      entry_length: '',
      time: moment(),
      word_length: 0,
    };
  }

  componentDidMount() {
    this.clearPinnedPrompt();
  }

  clearPinnedPrompt = () => {
    const action = {
      type: 'PIN_PROMPT',
      payload: [],
    };
    this.props.dispatch(action);
  }

  onChange = (editorState) => { // on change in the editor
    this.setState({ editorState });
  }

  saveContent = () => {
    const endTime = moment();
    const newTime = endTime.diff(this.state.time);
    const pinPrompt = this.props.pinnedPrompt;
    const { editorState } = this.state;
    const content = {
      text: editorStateToJSON(editorState),
      title: this.state.title,
      genre: this.props.genreSave,
      time_length: newTime,
      entry_length: this.countWords(editorStateToJSON(this.state.editorState)),
      entry_prompt: pinPrompt,
      // eslint-disable-next-line no-underscore-dangle
      subTime: moment()._d,
    };

    if (this.state.title !== '') {
      const action = { type: 'ADD_ENTRY', payload: content };
      this.props.dispatch(action);
      this.props.history.push('/home');
    } else {
      alert('Make sure to name your story!');
    }
  }

  titleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <Container fluid="md">
        <div className="editor-header header">
          <div className="editor-header">
            <h2>Title:</h2>
            <input
              className="title"
              placeholder="Title"
              onChange={this.titleChange}
            />
          </div>

          <h3>
            Words Til Goal:
            {' '}
            {wordCountService.wordsLeft(
              this.state.editorState,
              this.props.user.word_goal,
            )}
          </h3>
        </div>
        <div className="pinned-content">
          <PinnedPrompt />
        </div>
        <div className="m-5 bg-light">
          <EditorContainer
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
        <Row className="d-flex justify-content-around mt-2">
          <Col className="d-flex justify-content-end">
            <PromptButton />
          </Col>
          <Col className="d-flex justify-content-center">
            <Genre />
          </Col>
          <Col>
            <Button onClick={this.saveContent} className="ph-button">
              Save
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStoreToProps = (state) => ({
  user: state.user,
  genreSave: state.genreSave,
  pinnedPrompt: state.pinnedPrompt,
});
export default connect(mapStoreToProps)(TextEditor);
