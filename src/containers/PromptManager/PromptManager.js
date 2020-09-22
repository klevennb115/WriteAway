import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import * as promptTypeConverter from "../../services/promptTypeConverterService";

const PromptManager = (props) => {
    const [prompt, setPrompt] = useState('');
    const [typeOfPrompt, setTypeOfPrompt] = useState("Creative");
    useEffect(() => {
        getPrompts();
    }, []);

    const getPrompts = () => {
		props.dispatch({ type: "GET_PROMPTS_TYPES" }); 
    };

    const submitPrompt = () => {
        let promptToSend = {
					typeOfPrompt: promptTypeConverter.getPromptGenreInt(typeOfPrompt),
					text: prompt,
				};
        const action = { type: "ADD_PROMPT", payload: promptToSend };
		props.dispatch(action);
    }

    const handleChange = (e) => {
			setTypeOfPrompt(e.target.value);
		};

    return (
			<div class="container">
				<div class="row justify-content-md-center">
					{
						<select
							class="form-control form-control-lg col col-lg-2"
							onChange={handleChange}
						>
							{props.promptTypes.map((x) => {
								return (
									<option
										key={x.prompt_type}
										value={x.prompt_type}
									>
										{x.prompt_type}
									</option>
								);
							})}
						</select>
					}
					<div class="input-group">
						<textarea
							onInput={(e) => setPrompt(e.target.value)}
							cols="300"
							required
							class="form-control"
							aria-label="With textarea"
						></textarea>
					</div>
					<button type="button" class="btn btn-primary" onClick={submitPrompt}>
						Submit
					</button>
				</div>
			</div>
		);
}
 

const mapStoreToProps = (state) => ({
	promptTypes: state.promptTypes,
});

export default connect(mapStoreToProps)(PromptManager);
