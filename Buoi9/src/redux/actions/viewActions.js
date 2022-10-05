import actionTypes from "../constants";

const toggleSidebar = () => {
    return {
        type: actionTypes.TOGGLE_SIDEBAR,
        payload: null
    }
}

const viewActions = {
    toggleSidebar
}

export default viewActions;