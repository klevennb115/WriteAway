/* eslint-disable */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import { connect } from 'react-redux';
connect;
import {
  Container, Col, Row, Button,
} from 'react-bootstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PromptButton from '../../components/PromptButton/PromptButton';
import Genre from '../../components/Genre/Genre';
import PinnedPrompt from '../../components/PinnedPrompt/PinnedPrompt';
import * as wordCountService from '../../services/wordCounterService';

const moment = require('moment'); // needed to timestamp submission

const content = {
  entityMap: {},
  blocks: [
    {
      key: '637gr',
      text: 'Initialized from content state.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

class EditorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      // editorState: convertFromRaw(content),
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
	};

	onEditorStateChange = (editorState) => {
	  console.log('editorState', editorState.toString());
	  this.setState({
	    editorState,
	  });
	};

	saveContent = () => {
	  const endTime = moment();
	  const newTime = endTime.diff(this.state.time);
	  const pinPrompt = this.props.pinnedPrompt;
	  const { editorState } = this.state;
	  const content = {
	    // text: editorStateToJSON(editorState),
	    text: editorState,
	    title: this.state.title,
	    genre: this.props.genreSave,
	    time_length: newTime,
	    // entry_length: this.countWords(editorStateToJSON(this.state.editorState)),
	    entry_length: 19,
	    entry_prompt: pinPrompt,
	    subTime: moment()._d,
	  };

	  if (this.state.title !== '') {
	    const action = { type: 'ADD_ENTRY', payload: content };
	    this.props.dispatch(action);
	    this.props.history.push('/home');
	  } else {
	    alert('Make sure to name your story!');
	  }
	};

	titleChange = (event) => {
	  this.setState({ title: event.target.value });
	};

	render() {
	  // const { editorState } = this.state;
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
      {/*
					<h3>
						Words Til Goal:{" "}
						{this.state.editorState.blocks[0].text
							? wordCountService.wordsLeft(
									this.state.editorState.blocks[0].text,
									this.props.user.word_goal
							  )
							: wordCountService.wordsLeft(
									false,
									this.props.user.word_goal
							  )}
					</h3> */}
    </div>
    <div className="pinned-content">
      <PinnedPrompt />
    </div>
    <div>
      <CKEditor
        editor={ClassicEditor}
        data=""
        onInit={(editor) => {
						  // You can store the "editor" and use when it is needed.
						  console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
						  const data = editor.getData();
						  console.log({ event, editor, data });
						  this.onEditorStateChange(data);
        }}
        onBlur={(event, editor) => {
						  console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
						  console.log('Focus.', editor);
        }}
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
export default connect(mapStoreToProps)(EditorContainer);
