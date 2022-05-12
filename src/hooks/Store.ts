import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from 'react-redux';

import user from '~/reducers/user';

export const store = configureStore({
    reducer: {
        user,
    },
});

export type Dispatcher = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const useDispatcher = () => useDispatch<Dispatcher>();
const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export { useDispatcher, useSelector };
