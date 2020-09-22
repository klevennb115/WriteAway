import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getPromptTypes() {
	try {
		const serverResponse = yield axios.get("/api/prompts/prompt-type"); //sends to server.js
		yield put({ type: "SET_PROMPTS_TYPES", payload: serverResponse.data }); //sends to reducer
	} catch (error) {
		console.log("error in prompt saga", error);
	}
}

function* promptTypeSaga() {
	yield takeLatest("GET_PROMPTS_TYPES", getPromptTypes);
}

export default promptTypeSaga;
