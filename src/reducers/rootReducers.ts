import { combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "./authReducer";

export const reducers = combineReducers({
    auth: authReducer
});

export type RootState = ReturnType<typeof reducers>