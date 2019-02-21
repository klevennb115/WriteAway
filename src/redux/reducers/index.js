import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import prompt from './promptReducer';
import entry from './entryReducer';
import timer from './timeReducer';
import edit from './editReducer';
import entryID from './entryIDReducer';
import genres from './genresReducer';
import genreSave from './genreSaveReducer'
import pinnedPrompt from './pinnedPrompt'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  prompt, //will contain a large array of random prompts and advice and stuff
  entry, //for the profile page
  timer,  //from the timer
  edit,
  entryID,  //non editor content the edit session
  genres, // for the dropdown
  genreSave,
  pinnedPrompt,
});

export default rootReducer;
