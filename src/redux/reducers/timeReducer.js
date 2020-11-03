const timeReducer = (s = 0, action) => {
  let state = s;
  switch (action.type) {
    case 'INCREASE_TIME':
      state += action.payload;
      return state;
    default:
      return state;
  }
};

export default timeReducer;
