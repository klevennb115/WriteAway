const promptReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROMPTS':
            return action.payload;
        default:
            return state;
    }
};

export default promptReducer;
