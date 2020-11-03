/* eslint-disable no-console */
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getGenres() {
  try {
    const serverResponse = yield axios.get('/api/genres'); // sends to server.js
    yield put({ type: 'SET_GENRES', payload: serverResponse.data }); // sends to reducer
  } catch (error) {
    console.log('error in genre saga', error);
  }
}

function* genreSaga() {
  yield takeLatest('GET_GENRES', getGenres);
}

export default genreSaga;
