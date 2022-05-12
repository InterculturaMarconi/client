import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '~/hooks/Store';

export const enum UserRole {
    USER,
    ADMIN,
}

export interface IUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    role: UserRole;
    propic: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

type UserType = IUser | null;

const initialState = null as UserType;

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signin: (state: UserType, action: PayloadAction<string, string>) => {},
        signup: (state: UserType) => {},
        signout: (state: UserType) => {},
    },
});

export const { signin, signout } = UserSlice.actions;

export const getUser = (state: RootState) => state.user;

export default UserSlice.reducer;
