const promptReducer = (state = [], action) => {
    switch (action.type) {
        case 'PIN_PROMPT':
            return action.payload;
        default:
            return state;
    }
};

export default promptReducer;