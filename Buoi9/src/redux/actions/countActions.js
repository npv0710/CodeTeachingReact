import actionTypes from "../constants";

const increaseCount = () => {
    return {
        type: actionTypes.INCREMENT_COUNT,
        payload: null
    }
}

const decreaseCount = () => {
    return {
        type: actionTypes.DECREMENT_COUNT,
        payload: null
    }
}

const countActions = {
    increaseCount,
    decreaseCount
}

export default countActions;