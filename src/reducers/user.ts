import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '~/hooks/Store';
import { api } from '~/main';

export interface IUser {
    id: number;
    nome: string;
    cognome: string;
    email: string;
    img: string;
}

type UserStatus = 'loged' | 'logedout' | 'failed' | 'pending';

export const enum UserError {
    INVALID_BODY,
    ALREADY_REGISTERED,
    INVALID_CREDENTIALS,
    UNKNOWN_USER,
}

export interface IUserState {
    user?: IUser;
    status: UserStatus;
    error?: UserError;
}

const initialState: IUserState = {
    status: 'logedout',
};

export interface IRegister {
    nome: string;
    cognome: string;
    email: string;
    password: string;
}

export interface ILogin {
    email: string;
    password: string;
}

const SignIn = createAsyncThunk('user/login', async (payload: ILogin, thunkApi) => {
    const res = await api('login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const { data, error, success } = await res.json();

    if (success === true) {
        localStorage.setItem('token', data.token);
        return { ...data.user };
    }

    return thunkApi.rejectWithValue(error);
});

const SignUp = createAsyncThunk('user/register', async (payload: IRegister, thunkApi) => {
    const res = await api('register', {
        method: 'POST',
        body: JSON.stringify(payload),
    });

    const { data, error, success } = await res.json();

    if (success) {
        localStorage.setItem('token', data.token);
        return { ...data.user };
    }

    return thunkApi.rejectWithValue(error);
});

const Fetch = createAsyncThunk('user/fetch', async (_, thunkApi) => {
    const res = await api('user', {
        method: 'GET',
        headers: {
            'X-Authorization': `${localStorage.getItem('token')}`,
        },
    });

    const { data, success } = await res.json();
    if (success) {
        return { ...data };
    }

    return thunkApi.rejectWithValue(UserError.UNKNOWN_USER);
});

interface IUserUpdate {
    id: number;
    body: Record<string, string>;
}

const Update = createAsyncThunk('user/update', async (payload: IUserUpdate, thunkApi) => {
    const res = await api(`user/${payload.id}`, {
        method: 'PUT',
        headers: {
            'X-Authorization': `${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload.body),
    });

    const { data, error, success } = await res.json();

    if (success) {
        return { ...data };
    }

    return thunkApi.rejectWithValue(error);
});

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SignOut: state => {
            state.status = 'logedout';
            state.user = undefined;

            localStorage.removeItem('token');
        },
    },
    extraReducers: builder => {
        builder.addCase(SignIn.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload as UserError;
        });

        builder.addCase(SignIn.fulfilled, (state, action) => {
            state.status = 'loged';
            state.user = action.payload as IUser;
        });

        builder.addCase(SignIn.pending, state => {
            state.status = 'pending';
        });

        builder.addCase(SignUp.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload as UserError;
        });

        builder.addCase(SignUp.fulfilled, (state, action) => {
            state.status = 'loged';
            state.user = action.payload as IUser;
        });

        builder.addCase(SignUp.pending, state => {
            state.status = 'pending';
        });

        builder.addCase(Fetch.fulfilled, (state, action) => {
            state.status = 'loged';
            state.user = action.payload as IUser;
        });

        builder.addCase(Fetch.rejected, (state, action) => {
            state.status = 'logedout';
            state.user = undefined;
            state.error = action.payload as UserError;
        });

        builder.addCase(Fetch.pending, state => {
            state.status = 'pending';
        });

        builder.addCase(Update.fulfilled, (state, action) => {
            state.status = 'loged';
            state.user = action.payload as IUser;
        });

        builder.addCase(Update.rejected, (state, action) => {
            state.error = action.payload as UserError;
        });

        builder.addCase(Update.pending, state => {
            state.status = 'pending';
        });
    },
});

export const getUser = (state: RootState) => state.user;

export const { SignOut } = UserSlice.actions;
export { SignIn, SignUp, Fetch, Update };

export default UserSlice.reducer;
