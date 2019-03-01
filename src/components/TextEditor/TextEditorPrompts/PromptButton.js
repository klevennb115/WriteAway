import React, { Component } from 'react';
import { connect } from 'react-redux';
// import promptSaga from '../../../redux/sagas/promptSaga';
import swal from 'sweetalert';
// import PropTypes from 'prop-types'; //materialUI stuff
// import classNames from ' ';
// import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import brown from '@material-ui/core/colors/brown';

class PromptButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            genre: []
        }
    }
    componentDidMount() {
        this.getPrompts();
    }
    getPrompts = () => {
        this.props.dispatch({ type: 'GET_ADVICE' });  //should technically be called GET_PROMPTS
    }
    showPrompt = () => {
        let fantasyPrompts = [];
        let journalPrompts = [];
        let scifiPrompts = [];
        let romancePrompts = [];
        let thrillerPrompts = [];
        for (const entry of this.props.prompt) {  //sorts prompts by type
            if (entry.type_of_prompt === 2) {
                scifiPrompts.push(entry);
            } else if (entry.type_of_prompt === 6) {
                journalPrompts.push(entry);
            } else if (entry.type_of_prompt === 3) {
                fantasyPrompts.push(entry);
            } else if (entry.type_of_prompt === 8) {
                romancePrompts.push(entry);
            } else if (entry.type_of_prompt === 9) {
                thrillerPrompts.push(entry);
            }
        }

            swal("What kind of prompt would you like?", {
                buttons: {
                    creative: {
                        text: "Creative Prompt",
                        value: "creative",  //case looks for values
                    },
                    journal: {
                        text: "Journal Prompt",
                        value: "journal",
                    },
                    cancel: "Cancel"
                },
            }).then((value) => {
                switch (value) {
                    case "journal":
                        this.setState({
                            genre: journalPrompts
                        });
                        this.promptAlert(journalPrompts[Math.floor(Math.random() * Math.floor(this.state.genre.length))].text);
                        break;
                    case "creative":
                        swal("What genre are you looking for?",{
                            buttons:{
                                fantasy: {
                                    text: "Fantasy",
                                    value: "fantasy"
                                },
                                romance: {
                                    text: "Romance",
                                    value: "romance"
                                },
                                scifi: {
                                    text: "Science Fiction",
                                    value: "scifi"
                                },
                                thriller: {
                                    text: "Thriller",
                                    value: "thriller"
                                },
                                cancel: true
                            }
                        }).then((value) => {
                            switch (value) {

                                case "fantasy":
                                    this.setState({
                                        genre: fantasyPrompts
                                    });
                                    this.promptAlert(fantasyPrompts[Math.floor(Math.random() * Math.floor(this.state.genre.length))].text);
                                    break;
                                case "romance":
                                    this.setState({
                                        genre: romancePrompts
                                    });
                                    this.promptAlert(romancePrompts[Math.floor(Math.random() * Math.floor(this.state.genre.length))].text);
                                    break;
                                case "scifi":
                                    this.setState({
                                        genre: scifiPrompts
                                    });
                                    this.promptAlert(scifiPrompts[Math.floor(Math.random() * Math.floor(this.state.genre.length))].text);
                                    break;
                                case "thriller":
                                    this.setState({
                                        genre: thrillerPrompts
                                    });
                                    this.promptAlert(thrillerPrompts[Math.floor(Math.random() * Math.floor(this.state.genre.length))].text);
                                    break;
                                default:
                                    break;
                            }
                        });
                        break;
                    default:
                        break;
                }
    })}
    promptAlert = (prompt) => {
        swal(prompt, {
            buttons: {
                cancel: "Cancel",
                pin: {
                    text: "Use this prompt",
                    value: "pin",
                }, 
                next: {
                    value: "next"
                },
            },
        })
            .then((value) => {
                switch (value) {

                    case "next":
                        this.promptAlert(this.state.genre[Math.floor(Math.random() * Math.floor(this.state.genre.length))].text)
                        break;

                    case "pin":
                        let action = {
                            type: "PIN_PROMPT",
                            payload: prompt
                        }
                        this.props.dispatch(action);
                        break;

                    default:
                        break;
                }
            });
    }

    render() {
        return (
            <div>
                <button onClick={this.showPrompt} className="ph-button">I need a prompt!</button>
            </div>
        )
    }
}

const mapStoreToProps = state => ({
    prompt: state.prompt,
});
export default connect(mapStoreToProps)(PromptButton);