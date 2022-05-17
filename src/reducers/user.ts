import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '~/hooks/Store';

const api = (url: string, opt?: RequestInit) =>
    fetch(`http://pctomarconi.altervista.org/${url}`, opt);

export interface IUser {
    id: number;
    nome: string;
    cognome: string;
    email: string;
    img: string;
    role: number;
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
        body: JSON.stringify(payload),
    });

    const { data, error } = await res.json();

    if (res.status === 200) {
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

    const { data, error } = await res.json();

    if (res.status === 200) {
        localStorage.setItem('token', data.token);
        return { ...data.user };
    }

    return thunkApi.rejectWithValue(error);
});

const Fetch = createAsyncThunk('user/fetch', async (_, thunkApi) => {
    const res = await api('user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });

    const { data } = await res.json();
    if (res.status === 200) {
        return { ...data };
    }

    return thunkApi.rejectWithValue(UserError.UNKNOWN_USER);
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
            console.log('test');
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
        });

        builder.addCase(Fetch.pending, state => {
            state.status = 'pending';
        });
    },
});

export const getUser = (state: RootState) => state.user;

export const { SignOut } = UserSlice.actions;
export { SignIn, SignUp, Fetch };

export default UserSlice.reducer;
