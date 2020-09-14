import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

const PromptButton = (props) => {
    const [genre, setGenre] = useState('');
    useEffect(() => {
        getPrompts();
    }, []);

    const getPrompts = () => {
        props.dispatch({ type: "GET_PROMPTS" });  //should technically be called GET_PROMPTS
    }
    const showPrompt = () => {
        let fantasyPrompts = [];
        let journalPrompts = [];
        let scifiPrompts = [];
        let romancePrompts = [];
        let thrillerPrompts = [];
        for (const entry of props.prompt) {  //sorts prompts by type
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
                        setGenre("journal")
                       promptAlert(journalPrompts[Math.floor(Math.random() * Math.floor(genre.length))].text);
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
                                    setGenre(fantasyPrompts);
                                    promptAlert(fantasyPrompts[Math.floor(Math.random() * Math.floor(genre.length))].text);
                                    break;
                                case "romance":
                                    setGenre(romancePrompts);
                                    promptAlert(romancePrompts[Math.floor(Math.random() * Math.floor(genre.length))].text);
                                    break;
                                case "scifi":
                                    setGenre(scifiPrompts);
                                    promptAlert(scifiPrompts[Math.floor(Math.random() * Math.floor(genre.length))].text);
                                    break;
                                case "thriller":
                                    setGenre(thrillerPrompts);
                                    promptAlert(thrillerPrompts[Math.floor(Math.random() * Math.floor(genre.length))].text);
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
    const promptAlert = (prompt) => {
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
                        promptAlert(genre[Math.floor(Math.random() * Math.floor(genre.length))].text)
                        break;

                    case "pin":
                        let action = {
                            type: "PIN_PROMPT",
                            payload: prompt
                        }
                        props.dispatch(action);
                        break;

                    default:
                        break;
                }
            });
    }
    return (
        <div>
            <button onClick={showPrompt} className="ph-button">I need a prompt!</button>
        </div>
    )
}
 
const mapStoreToProps = state => ({
    prompt: state.prompt,
});
export default connect(mapStoreToProps)(PromptButton);