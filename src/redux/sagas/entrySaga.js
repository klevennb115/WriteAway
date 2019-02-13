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
    }
    
}
function* entrySaga() {
    yield takeEvery('GET_ENTRIES', getEnries);
    yield takeEvery('ADD_ENTRY', addEntry);
    yield takeEvery('DELETE_ENTRY', deleteEntry);
}

// try {
//     const config = {
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true,
//     };

//     // the config includes credentials which
//     // allow the server session to recognize the user
//     // If a user is logged in, this will return their information
//     // from the server session (req.user)
//     const response = yield axios.get('api/user', config);

//     // now that the session has given us a user object
//     // with an id and username set the client-side user object to let
//     // the client-side code know the user is logged in
//     yield put({ type: 'SET_USER', payload: response.data });
// } catch (error) {
//     console.log('User get request failed', error);
// }
// }

export default entrySaga;