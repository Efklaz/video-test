import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
