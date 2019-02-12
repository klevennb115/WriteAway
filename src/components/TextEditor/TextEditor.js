// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// class TextEditor extends Component {
//     renders() {
//         return (
//             <h1>Hi</h1>
//         )
//     }
// }
// const mapStoreToProps = reduxStore => ({
//     reduxStore,
// })
// export default connect(mapStoreToProps)(TextEditor);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// const TextEditor = () => (
//     <div>
//         <p>
//             Profile
//         </p>
//         <button>Sup</button>
//     </div>
// );
// const mapStoreToProps = reduxStore => ({
//     reduxStore,
// })
// export default connect(mapStoreToProps)(TextEditor);

//Test page for text editor
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import '../TextEditor/megadraft.css';
import { editorStateToJSON } from 'megadraft/lib/utils';
import {connect} from 'react-redux';
import Timer from '../Timer/Timer'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: editorStateFromRaw(null), timer: 0 };
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
  handleTimeChange = (event) =>{
      this.setState({timer: event})
  }
 
  render() {
    return (
      <div>
          <Timer onChange={this.handleTimeChange} />
        <p>
          Write Below
        </p>
        <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange} />
          <button onClick={this.saveContent}>Save</button>
      </div>
    );
  }
}
ReactDOM.render(
  <TextEditor />,
  document.getElementById('react-root')
);
export default connect()(TextEditor);