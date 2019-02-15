const editReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_ENTRY':
            return action.payload;
        default:
            return state;
    }
};
//this reducer takes the text from whatever entry is clicked on so the editor can display it
export default editReducer;