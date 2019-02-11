import axios from 'axios';
import { put, takeEvery} from 'redux-saga/effects';

function* addEntry(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        yield axios.post('/api/entries', action.payload, config); //sends to server.js
        
    } catch (error) {
        console.log('error in add entry saga', error);

    }
}

function* entrySaga() {
    yield takeEvery('ADD_ENTRY', addEntry);
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