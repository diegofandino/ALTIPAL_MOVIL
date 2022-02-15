import { types } from "../types/types";

const initialState = {
    isLoggedIn: false,
    user: {}
}

export const authReducer = ( state = initialState, action: any) => {

    switch (action.type) {
        case types.authLogin:
            return {...state, isLoggedIn: true, user: action.payload}
        case types.authChecking:
            return action.payload ? {...state, isLoggedIn: true, user: action.payload} : {...state, isLoggedIn: false, user: {}} 
    
        default:
            return state;
    }

}