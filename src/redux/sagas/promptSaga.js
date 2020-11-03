/* eslint-disable no-console */
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAdvice() {
  try {
    const serverResponse = yield axios.get('/api/prompts'); // sends to server.js
    yield put({ type: 'SET_PROMPTS', payload: serverResponse.data }); // sends to reducer
  } catch (error) {
    console.log('error in prompt saga', error);
  }
}

function* addPrompt(action) { // Prompt POST
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield axios.post('/api/prompts', action.payload, config); // sends to server.js
  } catch (error) {
    console.log('error in add prompt saga', error);
  }
} // End POST

function* promptSaga() {
  yield takeLatest('GET_PROMPTS', getAdvice);
  yield takeLatest('ADD_PROMPT', addPrompt);
}

export default promptSaga;
