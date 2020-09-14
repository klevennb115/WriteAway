import React, {useEffect, useState} from "react";
import { connect } from "react-redux";

const PromptManager = (props) => {
    // const 
    // const [prompt, setPrompt] = useState('');
    useEffect(() => {
        getPrompts();
        console.log('!!!!!!!', props.genres);
    }, []);

    const getPrompts = () => {
        props.dispatch({ type: "GET_GENRES" }); 
    };

    return (
        <div class="container">
            <div class="row justify-content-md-center">
                {<select class="form-control form-control-lg col col-lg-2">
                    {props.genres.map(x=>{
                        return <option key={x.types}>{x.types}</option>
                    })}
                </select>}
                <div class="input-group">
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
            </div>
        </div>
    );
}
 

const mapStoreToProps = (state) => ({
    genres: state.genres,
});

export default connect(mapStoreToProps)(PromptManager);
