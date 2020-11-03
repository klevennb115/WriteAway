import { editorStateToJSON } from 'megadraft/lib/utils';

export const countWords = (s) => {
  let { text } = s.blocks[0];
  text = text.replace(/(^\s*)|(\s*$)/gi, ''); // exclude  start and end white-space
  text = text.replace(/[ ]{2,}/gi, ' '); // 2 or more space to 1
  text = text.replace(/\n /, '\n'); // exclude newline with a start spacing
  return text.split(' ').filter((str) => str !== '').length;
};

export const wordsLeft = (editorState, goal) => {
  if (!editorState) {
    return goal;
  }
  const wordsInEditor = editorStateToJSON(editorState);
  const wordsCounted = countWords(wordsInEditor);
  const wordsTilGoal = goal - (wordsCounted - 21); // 21 is the length of the JSON string
  if (wordsTilGoal <= 0) {
    return 'Goal Reached!'; // need to fix
  }
  return wordsTilGoal;
};
