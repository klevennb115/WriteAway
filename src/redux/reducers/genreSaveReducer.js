const genreSaveReducer = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_GENRE':
            return action.payload;
        default:
            return state;
    }
};

export default genreSaveReducer;