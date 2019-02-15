const entryIDReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_ID':
            return action.payload;
        default:
            return state;
    }
};

export default entryIDReducer;