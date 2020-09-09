import axios from 'axios';
import { put, takeEvery} from 'redux-saga/effects';

function* addEntry(action) {  //Entry POST
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        yield axios.post('/api/entries', action.payload, config); //sends to server.js
        
    } catch (error) {
        console.log('error in add entry saga', error);
    }
} //End POST

function* getEnries(){ //Entry GET
    try {
        let serverResponse = yield axios.get('/api/entries');
        yield put({ type: 'SET_ENTRIES', payload: serverResponse.data })
    } catch (error) {
        console.log('error in GET entry saga', error);
    }
} //end GET

function* deleteEntry(action) {
    try{
        yield axios.delete(`/api/entries/${action.payload}`);
        const nextAction = {type: 'GET_ENTRIES'};
        yield put(nextAction);
    } catch (error) {
        console.log('Error making DELETE request');
        alert('there was a problem');
}} //end DELETE

function* editEntry(action) {
    try{
        yield axios.put(`api/entries/${action.payload.id}`, action.payload);
    } catch (error) {
        console.log('error in edit entry saga', error);
    }
    
}  // will take action.payload.params && action.payload.entrycontents
function* entrySaga() {
    yield takeEvery('GET_ENTRIES', getEnries);
    yield takeEvery('ADD_ENTRY', addEntry);
    yield takeEvery('DELETE_ENTRY', deleteEntry);
    yield takeEvery('EDIT_ENTRY_IN_DB', editEntry);
}

export default entrySaga;