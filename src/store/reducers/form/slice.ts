import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postData } from "./thunks";
import { User, InitialStateType } from "./types";

const initialState: InitialStateType = {
    data: {
        id: 0,
        name: '',
        phone: '',
        email: '',
    },
    error: null,
    loading: false,
}


export const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {},
    extraReducers: {
        [postData.fulfilled.type]: (state, action: PayloadAction<User>) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload;
        },
        [postData.pending.type]: (state) => {
            state.loading = true;
        },
        [postData.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export default chartSlice.reducer;