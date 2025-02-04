import {type Action, configureStore, type ThunkAction} from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        news: newsReducer,
        auth: authReducer,
    },
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxDispatch = typeof store.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action
>;
