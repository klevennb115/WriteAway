import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as promptTypeConverter from '../../services/promptTypeConverterService';

const PromptManager = (props) => {
  const [prompt, setPrompt] = useState('');
  const [typeOfPrompt, setTypeOfPrompt] = useState('Creative');
  const promptTypes = { props };

  const getPrompts = () => {
    props.dispatch({ type: 'GET_PROMPTS_TYPES' });
  };

  useEffect(() => {
    getPrompts();
  }, []);

  const submitPrompt = () => {
    const promptToSend = {
      typeOfPrompt: promptTypeConverter.getPromptGenreInt(typeOfPrompt),
      text: prompt,
    };
    const action = { type: 'ADD_PROMPT', payload: promptToSend };
    props.dispatch(action);
  };

  const handleChange = (e) => {
    setTypeOfPrompt(e.target.value);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <select
          className="form-control form-control-lg col col-lg-2"
          onChange={handleChange}
        >
          {promptTypes.map((x) => (
            <option
              key={x.prompt_type}
              value={x.prompt_type}
            >
              {x.prompt_type}
            </option>
          ))}
        </select>
        <div className="input-group">
          <textarea
            onInput={(e) => setPrompt(e.target.value)}
            cols="300"
            required
            className="form-control"
            aria-label="With textarea"
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={submitPrompt}>
          Submit
        </button>
      </div>
    </div>
  );
};

const mapStoreToProps = (state) => ({
  promptTypes: state.promptTypes,
});

export default connect(mapStoreToProps)(PromptManager);
