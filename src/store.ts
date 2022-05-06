import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {}
});

export type Dispatcher = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
