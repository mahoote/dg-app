import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '@supabase/supabase-js'

interface AuthState {
    user: User | null
    loading: boolean
}

const initialState: AuthState = {
    user: null,
    loading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
    },
})

export const { setUser, setLoading } = authSlice.actions
export default authSlice.reducer
