import { mainReducer } from './redusers/main/main'
import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper"

const rootReducer = combineReducers({
    main: mainReducer
})

const store = configureStore({
    reducer: rootReducer,
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

const makeStore = () => store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const storeWrapper = createWrapper<AppStore>(makeStore);