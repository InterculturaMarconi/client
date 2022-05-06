import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {},
});

export type Dispatcher = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const dispatchHook = () => useDispatch<Dispatcher>();
const selectorHook: TypedUseSelectorHook<RootState> = useSelector;

export { dispatchHook as useDispatch, selectorHook as useSelector };
