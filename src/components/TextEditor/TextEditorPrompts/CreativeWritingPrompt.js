import React, { Component } from 'react';
import { connect } from 'react-redux';
// import promptSaga from '../../../redux/sagas/promptSaga';
import swal from 'sweetalert';
var moment = require('moment');

class CreativeWritingPrompt extends Component {
    componentDidMount() {
        this.getPrompts();
    }
    getPrompts = () => {
        this.props.dispatch({ type: 'GET_ADVICE' });  //should technically be called GET_PROMPTS
    }

    showPrompt = (event) => {
        // swal ("Hello World");
        this.props.prompt.length !== 0 && console.log(this.props.prompt);
        console.log(event.target.value);

        
    }

    render(){
        // this.prompt.length !== 0 && this.showPrompt()
        return(
            <div>
                <button onClick={this.showPrompt} value='1'>Creative Prompt</button>
                <button onClick={this.showPrompt} value='6'>Journal Prompt</button>
                <button onClick={this.showPrompt} value='2'>Science-Fiction Prompt</button>
                <button onClick={this.showPrompt} value='3'>Fantasy Prompt</button>
            </div>
        )
    }
}

const mapStoreToProps = state => ({
    prompt: state.prompt,
});
export default connect(mapStoreToProps)(CreativeWritingPrompt);