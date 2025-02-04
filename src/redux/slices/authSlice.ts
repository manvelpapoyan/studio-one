import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { NavigateFunction } from "react-router-dom";
import { RoutesName, StorageKey } from "../../constants";
import StorageManager from "../../helpers/storageManager";

interface AuthState {
    user: string | null;
    isAuthenticated:string | null;
    error: string | null;
}

const initialState: AuthState = {
    user: StorageManager.getItem(StorageKey.IS_AUTHENTICATED) ? 'admin' : null,
    isAuthenticated: StorageManager.getItem(StorageKey.IS_AUTHENTICATED) === 'true' ? 'true' : null,
    error: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ username: string; password: string  ,navigate:NavigateFunction}>) => {
            const { username, password,navigate } = action.payload;
            if (username === "admin" && password === "12345") {
                StorageManager.setItem(StorageKey.IS_AUTHENTICATED, 'true');
                StorageManager.setItem(StorageKey.TOKEN, 'fake-jwt-token');
                state.user = username;
                state.isAuthenticated = 'true';
                state.error = null;
                navigate(RoutesName.PROFILE)
            }else {
                state.error = "Invalid username or password";
            }
        },
        logout: (state) => {
            localStorage.removeItem("user");
            state.user = null;
            state.isAuthenticated = null;
        },
    },
});


export const selectAuthState = (state: RootState) => state.auth;
export const authErrorSelector = createSelector(
    [selectAuthState],
    (auth) => auth.error
);
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
