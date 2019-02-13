const timeReducer = (state = [0], action) => {
    switch (action.type) {
        case 'INCREASE_TIME':
            return state += action.payload
        default:
            return state;
    }
};

export default timeReducer;