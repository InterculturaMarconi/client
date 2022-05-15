import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '~/hooks/Store';

interface IUser {
    id: number;
    nome: string;
    cognome: string;
    email: string;
    propic: string;
    role: number;
}

interface UserState {
    entity: IUser | null;
    status: 'pending' | 'succeeded' | 'failed';
    error?: string;
}

const initialState: UserState = {
    status: 'pending',
    entity: null,
};

interface IRegister {
    nome: string;
    cognome: string;
    email: string;
    password: string;
    propic?: string;
}

export const enum RegisterError {
    EXISTS = 'User already exists.',
}

export const SignUp = createAsyncThunk('user/signup', async (payload: IRegister, api) => {
    const res = await fetch('http://pcto.localhost/register.php', {
        method: 'POST',
        // headers: {
        //  Accept: 'application/json',
        // 'Content-Type': 'application/json',
        // },
        body: JSON.stringify(payload),
    });

    const { message, data } = await res.json();
    if (res.status === 201) {
        localStorage.setItem('auth-token', data.token);
        return { ...data.user };
    }

    return api.rejectWithValue(message);
});

interface ILogin {
    email: string;
    password: string;
}

export const SignIn = createAsyncThunk('user/signin', async (payload: ILogin, api) => {
    const res = await fetch('http://pcto.localhost/login.php', {
        method: 'POST',
        // headers: {
        //      Accept: 'application/json',
        //     'Content-Type': 'application/json',
        // },
        body: JSON.stringify(payload),
    });

    const { message, data } = await res.json();

    if (res.status === 200) {
        localStorage.setItem('auth-token', data.token);
        return { ...data.user };
    }

    return api.rejectWithValue(message);
});

export const Fetch = createAsyncThunk('user/fetch', async (payload, api) => {
    const state = api.getState() as UserState;
    if (state.entity) {
        return state.entity;
    }

    const res = await fetch('http://pcto.localhost/users/user.php', {
        method: 'GET',
        headers: {
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
    });

    const { data, message } = await res.json();

    if (res.status === 200) {
        return { ...data };
    }

    return api.rejectWithValue(message);
});

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SignOut: state => {
            state.entity = null;
            state.status = 'pending';
            localStorage.removeItem('auth-token');
        },
    },
    extraReducers: builder => {
        builder.addCase(SignUp.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.entity = action.payload;
        });

        builder.addCase(SignUp.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload as string;
        });

        builder.addCase(SignUp.pending, state => {
            state.status = 'pending';
        });

        builder.addCase(SignIn.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.entity = action.payload;
        });

        builder.addCase(SignIn.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload as string;
        });

        builder.addCase(SignIn.pending, state => {
            state.status = 'pending';
        });

        builder.addCase(Fetch.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.entity = action.payload;
        });

        builder.addCase(Fetch.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload as string;
        });

        builder.addCase(Fetch.pending, state => {
            state.status = 'pending';
        });
    },
});

export const getUser = (state: RootState) => state.user;

export const { SignOut } = UserSlice.actions;

export default UserSlice.reducer;
