import actionTypes from "../constants";

const initState = {
    count: 0
}

const countReducer = (state=initState, action) => {
    console.log(action);

    switch(action.type) {
        //case 'INCREMENT_COUNT':
        case actionTypes.INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        //case 'DECREMENT_COUNT':
        case actionTypes.DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

export default countReducer;