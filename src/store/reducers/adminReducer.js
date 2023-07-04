import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = {...state};
            copyState.isLoadingGender = true;
            console.log('fire fetch gender start: ', action)
            return {
                ...copyState
              
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            //let copyState = {...state};
            state.genders = action.data;
            state.isLoadingGender = false;
            console.log('check copyState: ',state)
            console.log('fire fetch gender success: ', action)
            return {
                ...state
                  
            }
        case actionTypes.FETCH_GENDER_FAILED:
            //let copyState = {...state};
            state.isLoadingGender = false;
            state.genders = [];
            console.log('fire fetch gender failed: ', action)
            return {
                ...state
              
            }
        
        default:
            return state;
    }
}

export default adminReducer;