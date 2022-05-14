import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
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

const SignUp = createAsyncThunk('user/signup', async (payload: IRegister, api) => {
    const res = await fetch('', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (res.status === 200) {
        localStorage.setItem('auth-token', data.token);

        return { ...data.user };
    }

    api.rejectWithValue(data.message);
});

interface ILogin {
    email: string;
    password: string;
}

export const SignIn = createAsyncThunk('user/signin', async (payload: ILogin, api) => {
    const res = await fetch('', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (res.status === 200) {
        localStorage.setItem('auth-token', data.token);

        return { ...data.user };
    }

    api.rejectWithValue(data.message);
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

        builder.addCase(SignUp.rejected, state => {
            state.status = 'failed';
        });

        builder.addCase(SignUp.pending, state => {
            state.status = 'pending';
        });

        builder.addCase(SignIn.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.entity = action.payload;
        });

        builder.addCase(SignIn.rejected, state => {
            state.status = 'failed';
        });

        builder.addCase(SignIn.pending, state => {
            state.status = 'pending';
        });
    },
});

export const getUser = (state: RootState) => state.user;

export const { SignOut } = UserSlice.actions;

export default UserSlice.reducer;
