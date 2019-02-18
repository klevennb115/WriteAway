import React, { Component } from 'react';
import { connect } from 'react-redux';
// import promptSaga from '../../../redux/sagas/promptSaga';
import swal from 'sweetalert';

class PromptButton extends Component {
    componentDidMount() {
        this.getPrompts();
    }
    getPrompts = () => {
        this.props.dispatch({ type: 'GET_ADVICE' });  //should technically be called GET_PROMPTS
    }

    showPrompt = () => {
        let counter = 0;
        let creativePrompts = [];
        let journalPrompts = [];
        let scifiPrompts = [];
        for (const entry of this.props.prompt) {  //sorts prompts by type
            if (entry.type_of_prompt === 1) {
                creativePrompts.push(entry);
            } else if (entry.type_of_prompt === 6) {
                journalPrompts.push(entry);
            } else if (entry.type_of_prompt === 2) {
                scifiPrompts.push(entry);
            }}
        this.shufflePrompts(journalPrompts);  //shuffles prompts so they don't get stale 
        this.shufflePrompts(creativePrompts);
        this.shufflePrompts(scifiPrompts);
        swal("What kind of prompt would you like?", {
            showCancelButton: true,
            buttons: {
                creative: {
                    text: "Creative Prompt",
                    value: "creative",
                },
                journal: {
                    text: "Journal Prompt",
                    value: "journal",
                },
                scifi: {
                    text: "Sci-Fi/Fantasy Prompt",
                    value: "scifi",
                },
                cancel: "Cancel"
            },
        }).then((value) => {
            switch (value) {
                case "journal":
                    // swal("Pikachu fainted! You gained 500 XP!");
                    console.log(counter);
                    this.promptAlert(journalPrompts[counter]);
                    counter +=1;
                    console.log(counter);
                    
                    break;

                default: swal("Got away safely!")
                    break;
            }



        })
    }
    promptAlert = (input) => {
        // swal(input, {
        //     buttons: {
        //         creative: {
        //             text: "Creative Prompt",
        //             value: "creative",
        //         }}})
        swal("What kind of prompt would you like?", {
            showCancelButton: true,
            buttons: {
                creative: {
                    text: "Creative Prompt",
                    value: "creative",
                },
                journal: {
                    text: "Journal Prompt",
                    value: "journal",
                },
                scifi: {
                    text: "Sci-Fi/Fantasy Prompt",
                    value: "scifi",
                },
                cancel: "Cancel"
            }})
        
    }
    shufflePrompts = (array) => {  //this is the Durstenfeld shuffle
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
    }
        
        // return array;
        // swal("What kind of prompt would you like?", {
        //     buttons: {
        //         cancel: "Cancel",
        //         creative: {
        //             text: "Creative Prompt",
        //             value: "creative",
        //         },
        //         journal: {
        //             text: "Journal Prompt",
        //             value: "journal",
        //         },
        //         scifi: {
        //             text: "Science-Fiction/Fantasy Prompt",
        //             value: "scifi",
        //         },
        //         defeat: true,
        //     },
        // }).then((value) => {
        //     switch (value) {
        //         case "journal":
        //             swal("Pikachu fainted! You gained 500 XP!");
        //             counter += 1;
        //             console.log(counter);

        //             break;

        //         default: swal("Got away safely!")
        //             break;
        //     }



        // })
    }
    render() {
        // this.prompt.length !== 0 && this.showPrompt()
        return (
            <div>
                <button onClick={this.showPrompt}>I need a prompt!</button>
            </div>
        )
    }
}

const mapStoreToProps = state => ({
    prompt: state.prompt,
});
export default connect(mapStoreToProps)(PromptButton);