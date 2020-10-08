import { editorStateToJSON } from "megadraft/lib/utils";

export const countWords = (s) => {
	console.log(s)
	s= s.blocks[0].text
	//word counter found on stack overflow. Counts line breaks as 16 words.
	s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
	s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
	s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
	return s.split(" ").filter(function (str) {
		return str !== "";
	}).length;
	//return s.split(' ').filter(String).length; - this can also be used
};

export const wordsLeft = (editorState, goal) => {
	if (!editorState) {
		return goal
	}
	let wordsInEditor = editorStateToJSON(editorState);
	let wordsCounted = countWords(wordsInEditor);
	let wordsTilGoal = goal - (wordsCounted - 21); //21 is the length of the JSON string
	if (wordsTilGoal <= 0) {
		return "Goal Reached!"; //need to fix
	} else {
		return wordsTilGoal;
	}
};