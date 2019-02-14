const editReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_ENTRY':
            return action.payload;
        default:
            return state;
    }
};

export default editReducer;