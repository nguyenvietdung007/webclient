import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    USERInfo: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                USERInfo: action.USERInfo
            }
        case actionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                USERInfo: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                USERInfo: null
            }
        default:
            return state;
    }
}

export default appReducer;