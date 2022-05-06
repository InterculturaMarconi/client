import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from 'react-redux';

export const store = configureStore({
    reducer: {},
});

export type Dispatcher = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const useDispatcher = () => useDispatch<Dispatcher>();
const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export { useDispatcher, useSelector };
