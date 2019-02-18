import React, { Component } from 'react';
import { connect } from 'react-redux';
// import promptSaga from '../../../redux/sagas/promptSaga';
import swal from 'sweetalert';

class CreativeWritingPrompt extends Component {
    componentDidMount() {
        this.getPrompts();
    }
    getPrompts = () => {
        this.props.dispatch({ type: 'GET_ADVICE' });  //should technically be called GET_PROMPTS
    }

    showPrompt = (event) => {
        // swal ("Hello World");
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
        let counter = 0;
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        };

        swal("What kind of prompt would you like?", {
            buttons: {
                cancel: "Cancel",
                creative: {
                    text: "Creative Prompt",
                    value: "creative",
                },
                journal: {
                    text: "Journal Prompt",
                    value: "journal",
                },
                scifi: {
                    text: "Science-Fiction/Fantasy Prompt",
                    value: "scifi",
                },
                defeat: true,
            },
        }).then((value) => {
            switch (value) {
                case "journal":
                    swal("Pikachu fainted! You gained 500 XP!");
                    counter += 1;
                    console.log(counter);
                    
                    break;
            
                default:swal("Got away safely!")
                    break;
            }






        // swal(array[counter].text, {
        //     buttons: {
        //         cancel: "Cancel",
        //         catch: {
        //             text: "Throw Pokéball!",
        //             value: "catch",
        //         },
        //         defeat: true,
        //     },
        // })
        //     .then((value) => {
        //         switch (value) {

        //             case "defeat":
        //                 swal("Pikachu fainted! You gained 500 XP!");
        //                 break;

        //             case "catch":
        //                 swal("Gotcha!", "Pikachu was caught!", "success");
        //                 break;

        //             default:
        //             break;
        //                 // swal("Got away safely!");
        //         }
        //     });

        // return array;
        
    })}
    render(){
        // this.prompt.length !== 0 && this.showPrompt()
        return(
            <div>
                <button onClick={this.showPrompt} value='1'>Creative Prompt</button>
                <button onClick={this.showPrompt} value='6'>Journal Prompt</button>
                <button onClick={this.showPrompt} value='2'>Science-Fiction/Fantasy Prompt</button>
                {/* <button onClick={this.showPrompt} value='3'>Fantasy Prompt</button> */}
            </div>
        )
    }
}

const mapStoreToProps = state => ({
    prompt: state.prompt,
});
export default connect(mapStoreToProps)(CreativeWritingPrompt);