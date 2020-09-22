const promptTypeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROMPTS_TYPES':
            return action.payload;
        default:
            return state;
    }
};

export default promptTypeReducer;
