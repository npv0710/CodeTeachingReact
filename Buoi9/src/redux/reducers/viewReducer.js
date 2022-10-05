import actionTypes from "../constants";

const initState = {
    sidebarIsOpen: true,
    count: 0
}

const viewReducer = (state=initState, action) => {
    console.log(action);

    switch(action.type) {
        //case 'TOGGLE_SIDEBAR':
        case actionTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarIsOpen: !state.sidebarIsOpen
            }
        default:
            return state
    }
}

export default viewReducer;