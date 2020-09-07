import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CreativeWritingPrompt.css';

class CreativeWritingPrompt extends Component {
    constructor(props){
        super(props);
        this.state = {
            promptClicked:false
        }
    }
    componentDidMount() {
        this.getPrompts();
    }
    getPrompts = () => {
        this.props.dispatch({ type: 'GET_ADVICE' });  //should technically be called GET_PROMPTS
    }

    showPrompt = (event) => {
        this.setState({ promptClicked: !this.state.promptClicked});
        let selectedPrompts = [];
        this.props.prompt.length !== 0 && console.log(this.props.prompt);
        for (const entry of this.props.prompt) {
            if (entry.type_of_prompt === parseInt(event.target.value)) {
                selectedPrompts.push(entry)
            }
        }
        this.shufflePrompts(selectedPrompts);
    }
    shufflePrompts = (array) => {  //this is the Durstenfeld shuffle
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        };


        
    }
    render(){
        return(
            <div>
                <button onClick={this.showPrompt} value='1'>Show Me A Prompt</button>
                {this.state.promptClicked?<div>

                </div>: <h1>La</h1>}
                
            </div>
        )
    }
}

const mapStoreToProps = state => ({
    prompt: state.prompt,
});
export default connect(mapStoreToProps)(CreativeWritingPrompt);


//<p className="blockquote before"></p>