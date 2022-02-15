import { loginModel } from "../models/login.model";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { types } from "../types/types";

export const loginProcess =  (user: loginModel) => {
    return async (dispatch: any) => {
        
        let objectComplete = {
            user,
            isLoggedIn: true
        }

        try {
            await AsyncStorage.setItem('dataUser', JSON.stringify(objectComplete));
            dispatch(login(user));
          } catch (e) {
            console.log(e);
          }
    }
}

export const login =  (user: loginModel) => ({
    type: types.authLogin,
    payload: user
})

export const checkloginProcess =  () => {
    return async (dispatch: any) => {
        
        try {
            const objectComplete = await AsyncStorage.getItem('dataUser');
            if( objectComplete != null ){
                let objectStorage = JSON.parse(objectComplete);
                dispatch(checkIsLoggedIn(objectStorage.user));
            }else{
                return;
            }
          } catch (e) {
            console.log(e);
          }
    }
}

export const checkIsLoggedIn =  (user: loginModel) => ({
    type: types.authChecking,
    payload: user
})